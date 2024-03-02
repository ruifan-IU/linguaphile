import { Word } from '@prisma/client';

const maxWordsPerPage = 2000;

export default function drawPages(
  width: number,
  height: number,
  lineHeight: number = 50,
  fontSize: number = 20,
  text: string,
  words: { [key: string]: Word },
  canvasRef: React.RefObject<HTMLCanvasElement>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  setLessonPages: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  wordHandler: (
    e: React.MouseEvent<SVGTSpanElement, MouseEvent>,
    isSaved: boolean,
  ) => void,
) {


  if (text) {
    const pages = [];

    let maxWidth = (width > 300 ? width : 300) - width / 13.25;
    let columnHeight = height - height / 50;

    const pagePaddingLeft = width / 14.7;
    if (width - pagePaddingLeft > 300) {
      maxWidth = width - pagePaddingLeft;
    }

    const maxLinesPerPage = Math.round(columnHeight / lineHeight) - 2;

    // # words that have been displayed
    //(used when ordering a new page of words)
    let wordCount = 0;

    const canvas: unknown = canvasRef.current;
    const context =
      canvas instanceof HTMLCanvasElement ? canvas.getContext('2d') : null;
    if (!context) return;

    context.font = `${fontSize}px verdana`;
    const textPara: Array<string | number> = [];
    // Pushing zeroes allows the textToLines function to detect page breaks
    text.split('\n').forEach((para) => {
      if (para) {
        textPara.push(para);
        textPara.push(0);
      } else textPara.push(0);
    });
    const textWords = textPara
      .map((para) => {
        if (typeof para !== 'string') return 0;
        else return para.split(' ');
      })
      .flat();

    const getNextWords = (nextWordIndex: number) => {
      const words = textWords.slice(
        nextWordIndex,
        nextWordIndex + maxWordsPerPage,
      );

      return words;
    };

    const textToLines = (
      words: Array<string | number>,
      maxWidth: number,
      maxLines: number,
    ) => {
      const lines = [];

      while (words.length > 0 && lines.length <= maxLines) {
        const line = getLineOfText(words, maxWidth);
        words = words.splice(line.index + 1);
        lines.push(line);
        wordCount += line.index + 1;
      }

      return lines;
    };

    const getLineOfText = (words: Array<string | number>, maxWidth: number) => {
      let line = '';
      let space = '';
      for (let i = 0; i < words.length; i++) {
        // Check if "word" value is 0. If it is, line break.
        if (words[i] === 0) {
          return { index: i, text: line + '\u00A0' };
        }
        const testWidth = context.measureText(
          `${line} ${words[i] as string}`,
        ).width;
        // When tested width is greater than the maxwidth, return an index of one less
        if (testWidth > maxWidth) {
          return { index: i - 1, text: line };
        }
        line += `${space} ${words[i] as string}`;
        space = ' ';
      }
      return { index: words.length - 1, text: line };
    };

    const linesToLinks = (
      lines: Array<{ index: number; text: string }>,
      i: number,
    ) => {
      const linesOfLinks: Array<Array<JSX.Element>> = [];
      let linkedLine: Array<JSX.Element> = [];
      lines.forEach((line, lineIndex) => {
        line.text.split(' ').forEach((linkedWord, wordIndex) => {
          if (!linkedWord) return;
          let isSaved = false;
          if (linkedWord in words) {
            isSaved = true;
          }
          linkedLine.push(
            <tspan
              className={`cursor-pointer transition-all duration-200 ease-in-out hover:fill-teal-600 ${isSaved ? 'fill-info' : ''}`}
              onClick={(e) => wordHandler(e, isSaved)}
              key={`${i}${lineIndex}${wordIndex}${linkedWord}`}
            >{`${linkedWord} `}</tspan>,
          );
        });
        linesOfLinks.push(linkedLine);
        linkedLine = [];
      });
      return linesOfLinks;
    };

    const drawSvg = (
      linesOfLinks: JSX.Element[][],
      pagePaddingLeft: number,
      i: number,
    ) => {
      const tspans: Array<JSX.Element> = [];
      linesOfLinks.forEach((line, index) => {
        const tspan = (
          <tspan
            key={`page${index}-line${i}`}
            x={pagePaddingLeft}
            dy={`${lineHeight}px`}
          >
            {line.map((linkedWord) => linkedWord)}
          </tspan>
        );
        tspans.push(tspan);
      });

      const sText = (
        <text fontSize={`${fontSize}px`} fontFamily='Verdana'>
          {tspans}
        </text>
      );

      return (
        <div
          style={{ height: height, width: width, zIndex: 1 }}
          key={`page${i}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height={columnHeight}
            width={width}
          >
            {sText}
          </svg>
        </div>
      );
    };

    for (let i = 0; wordCount !== textWords.length; i++) {
      const lines = textToLines(
        getNextWords(wordCount),
        maxWidth,
        maxLinesPerPage,
      );
      const linesOfLinks = linesToLinks(lines, i);
      pages.push(drawSvg(linesOfLinks, pagePaddingLeft, i));
    }

    setLessonPages(pages);

    if (currentPage > pages.length - 1) {
      setCurrentPage(pages.length - 1);
    }
  }
}
