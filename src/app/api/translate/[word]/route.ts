import { TranslationServiceClient } from '@google-cloud/translate';

interface TranslationObject {
  translatedText: string;
  model: string;
  glossaryConfig: null;
  detectedLanguageCode: string;
}

export async function GET(
  request: Request,
  { params }: { params: { word: string } },
) {
  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  const projectId = 'polyglot-ai';
  const location = 'global';
  const word = params.word;

  const req = {
    parent: `projects/${projectId}/locations/${location}`,
    contents: [word],
    mimeType: 'text/plain', // mime types: text/plain, text/html
    sourceLanguageCode: 'en',
    targetLanguageCode: 'es',
  };

  // Run request
  const [response] = (await translationClient.translateText(req)) as Array<{
    translations: Array<TranslationObject>;
  }>;

  if (response && response.translations[0]) {
    return Response.json(response.translations[0]);
  } else {
    return Response.json({ error: 'No translation found' });
  }
}
