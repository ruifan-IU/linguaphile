const { PrismaClient } = require('@prisma/client');
const pris = new PrismaClient();

const load = async () => {
  try {
    await pris.lesson.deleteMany();
    console.log('Deleted records in lesson table');

    await pris.word.deleteMany();
    console.log('Deleted records in word table');

    await pris.user.delete({
      where: {
        email: 'dylan.jacob.black@gmail.com',
      },
    });
    console.log('Deleted records in user table');

    const user = await pris.user.create({
      data: {
        email: 'dylan.jacob.black@gmail.com',
        name: 'John Doe',
      },
    });
    console.log('Created user:', user);

    await pris.word.createMany({
      data: [
        {
          phrase: 'the',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'el, la, los, las',
        },
        {
          phrase: 'be',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ser, estar',
        },
        {
          phrase: 'to',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'a, hacia, para',
        },
        {
          phrase: 'of',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'de',
        },
        {
          phrase: 'and',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'y',
        },
        {
          phrase: 'a',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'un, una',
        },
        {
          phrase: 'in',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'en',
        },
        {
          phrase: 'that',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ese, esa, eso, aquel, aquella, aquello',
        },
        {
          phrase: 'have',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'tener, haber',
        },
        {
          phrase: 'I',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'yo',
        },
        {
          phrase: 'it',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'lo, la, ello, eso, aquello',
        },
        {
          phrase: 'for',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'para, por',
        },
        {
          phrase: 'not',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'no',
        },
        {
          phrase: 'on',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'en, sobre, acerca de',
        },
        {
          phrase: 'with',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'con',
        },
        {
          phrase: 'he',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'él',
        },
        {
          phrase: 'as',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'como',
        },
        {
          phrase: 'you',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'tú, usted, ustedes',
        },
        {
          phrase: 'do',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'hacer',
        },
        {
          phrase: 'at',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'en, a',
        },
        {
          phrase: 'this',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'este, esta, esto',
        },
        {
          phrase: 'but',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'pero',
        },
        {
          phrase: 'his',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'su',
        },
        {
          phrase: 'by',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'por, cerca de, a través de',
        },
        {
          phrase: 'from',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'de, desde',
        },
        {
          phrase: 'they',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ellos, ellas',
        },
        {
          phrase: 'we',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'nosotros, nosotras',
        },
        {
          phrase: 'say',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'decir',
        },
        {
          phrase: 'her',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'su',
        },
        {
          phrase: 'she',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ella',
        },
        {
          phrase: 'or',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'o',
        },
        {
          phrase: 'an',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'un, una',
        },
        {
          phrase: 'will',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'voluntad, testamento',
        },
        {
          phrase: 'my',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'mi',
        },
        {
          phrase: 'one',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'uno, una',
        },
        {
          phrase: 'all',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'todo, toda',
        },
        {
          phrase: 'would',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'condicional de will',
        },
        {
          phrase: 'there',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'allí, ahí',
        },
        {
          phrase: 'their',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'su',
        },
        {
          phrase: 'what',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'qué',
        },
        {
          phrase: 'so',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'tan, así que',
        },
        {
          phrase: 'up',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'arriba, hacia arriba',
        },
        {
          phrase: 'out',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'fuera, afuera',
        },
        {
          phrase: 'if',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'si',
        },
        {
          phrase: 'about',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'acerca de, sobre',
        },
        {
          phrase: 'who',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'quién',
        },
        {
          phrase: 'get',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'obtener, conseguir',
        },
        {
          phrase: 'which',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'cuál, cuáles',
        },
        {
          phrase: 'go',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ir',
        },
        {
          phrase: 'me',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'me',
        },
        {
          phrase: 'when',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'cuando',
        },
        {
          phrase: 'make',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'hacer',
        },
        {
          phrase: 'can',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'poder, saber',
        },
        {
          phrase: 'like',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'gustar, como',
        },
        {
          phrase: 'time',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'tiempo',
        },
        {
          phrase: 'no',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'no',
        },
        {
          phrase: 'just',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'sólo, justo',
        },
        {
          phrase: 'him',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'él',
        },
        {
          phrase: 'take',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'tomar, llevar',
        },
        {
          phrase: 'people',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'gente',
        },
        {
          phrase: 'into',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'en, dentro de',
        },
        {
          phrase: 'year',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'año',
        },
        {
          phrase: 'your',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'tu, tus',
        },
        {
          phrase: 'good',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'bueno, buena',
        },
        {
          phrase: 'some',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'algunos, algunas',
        },
        {
          phrase: 'could',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'poder, saber',
        },
        {
          phrase: 'them',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ellos, ellas',
        },
        {
          phrase: 'see',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ver',
        },
        {
          phrase: 'other',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'otro, otra',
        },
        {
          phrase: 'than',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'que, que no',
        },
        {
          phrase: 'then',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'entonces',
        },
        {
          phrase: 'now',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ahora',
        },
        {
          phrase: 'only',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'sólo, solamente',
        },
        {
          phrase: 'its',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'su',
        },
        {
          phrase: 'over',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'sobre, encima de',
        },
        {
          phrase: 'also',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'también',
        },
        {
          phrase: 'use',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'usar',
        },
        {
          phrase: 'two',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'dos',
        },
        {
          phrase: 'how',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'cómo',
        },
        {
          phrase: 'our',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'nuestro, nuestra',
        },
        {
          phrase: 'work',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'trabajar',
        },
        {
          phrase: 'first',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'primero, primera',
        },
        {
          phrase: 'well',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'bien',
        },
        {
          phrase: 'way',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'camino, forma',
        },
        {
          phrase: 'even',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'incluso, aún',
        },
        {
          phrase: 'new',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'nuevo, nueva',
        },
        {
          phrase: 'want',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'querer',
        },
        {
          phrase: 'because',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'porque',
        },
        {
          phrase: 'any',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'cualquier, cualquiera',
        },
        {
          phrase: 'these',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'estos, estas',
        },
        {
          phrase: 'give',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'dar',
        },
        {
          phrase: 'day',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'día',
        },
        {
          phrase: 'most',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'más, la mayoría',
        },
        {
          phrase: 'us',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'nosotros, nosotras',
        },
        {
          phrase: 'should',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'deber',
        },
        {
          phrase: 'very',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'muy',
        },
        {
          phrase: 'home',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'casa',
        },
        {
          phrase: 'look',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'mirar, buscar',
        },
        {
          phrase: 'come',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'venir',
        },
        {
          phrase: 'made',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'hecho, hecha',
        },
        {
          phrase: 'many',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'muchos, muchas',
        },
        {
          phrase: 'those',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'esos, esas',
        },
        {
          phrase: 'know',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'saber, conocer',
        },
        {
          phrase: 'where',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'dónde',
        },
        {
          phrase: 'after',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'después de',
        },
        {
          phrase: 'put',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'poner',
        },
        {
          phrase: 'back',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'atrás, de vuelta',
        },
        {
          phrase: 'think',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'pensar',
        },
        {
          phrase: 'help',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'ayudar',
        },
        {
          phrase: 'through',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'a través de',
        },
        {
          phrase: 'much',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'mucho, mucha',
        },
        {
          phrase: 'before',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'antes de',
        },
        {
          phrase: 'must',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'deber',
        },
        {
          phrase: 'great',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'grande, estupendo',
        },
        {
          phrase: 'own',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'propio, propia',
        },
        {
          phrase: 'old',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'viejo, vieja',
        },
        {
          phrase: 'never',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'nunca',
        },
        {
          phrase: 'same',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'mismo, misma',
        },
        {
          phrase: 'tell',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'decir',
        },
      ],
    });
    console.log('Created words');
    const date = new Date().toISOString();
    await pris.lesson.createMany({
      data: [
        {
          title: 'Twenty Thousand Leagues Under the Sea, Chapter One',
          level: 5,
          imageId: '33507_iqddhk',
          updated: date,
          public: true,
          languageId: 'en',
          userId: user.id,
          text: `THE YEAR 1866 was marked by a bizarre development, an unexplained and downright inexplicable phenomenon that surely no one has forgotten.
Without getting into those rumors that upset civilians in the seaports and deranged the public mind even far inland, it must be said that professional seamen were especially alarmed. Traders, shipowners, captains of vessels, skippers, and master mariners from Europe and America, naval officers from every country, and at their heels the various national governments on these two continents, were all extremely disturbed by the business.
In essence, over a period of time several ships had encountered "an enormous thing" at sea, a long spindle–shaped object, sometimes giving off a phosphorescent glow, infinitely bigger and faster than any whale.
The relevant data on this apparition, as recorded in various logbooks, agreed pretty closely as to the structure of the object or creature in question, its unprecedented speed of movement, its startling locomotive power, and the unique vitality with which it seemed to be gifted.
If it was a cetacean , it exceeded in bulk any whale previously classified by science. No naturalist, neither Cuvier nor Lacépède, neither Professor Dumeril nor Professor de Quatrefages, would have accepted the existence of such a monster sight unseen—specifically, unseen by their own scientific eyes.
Striking an average of observations taken at different times—rejecting those timid estimates that gave the object a length of 200 feet, and ignoring those exaggerated views that saw it as a mile wide and three long—you could still assert that this phenomenal creature greatly exceeded the dimensions of anything then known to ichthyologists, if it existed at all.
Now then, it did exist, this was an undeniable fact; and since the human mind dotes on objects of wonder, you can understand the worldwide excitement caused by this unearthly apparition.
As for relegating it to the realm of fiction, that charge had to be dropped. In essence, on July 20, 1866, the steamer Governor Higginson , from the Calcutta & Burnach Steam Navigation Co., encountered this moving mass five miles off the eastern shores of Australia.
Captain Baker at first thought he was in the presence of an unknown reef; he was even about to fix its exact position when two waterspouts shot out of this inexplicable object and sprang hissing into the air some 150 feet.
So, unless this reef was subject to the intermittent eruptions of a geyser, the Governor Higginson had fair and honest dealings with some aquatic mammal, until then unknown, that could spurt from its blowholes waterspouts mixed with air and steam. Similar events were likewise observed in Pacific seas, on July 23 of the same year, by the Christopher Columbus from the West India & Pacific Steam Navigation Co.
Consequently, this extraordinary cetacean could transfer itself from one locality to another with startling swiftness, since within an interval of just three days, the Governor Higginson and the Christopher Columbus had observed it at two positions on the charts separated by a distance of more than 700 nautical leagues. Fifteen days later and 2,000 leagues farther, the Helvetia from the Compagnie Nationale and the Shannon from the Royal Mail line, running on opposite tacks in that part of the Atlantic lying between the United States and Europe, respectively signaled each other that the monster had been sighted in latitude 42° 15' north and longitude 60° 35' west of the meridian of Greenwich.
From their simultaneous observations, they were able to estimate the mammal's minimum length at more than 350 English feet;* this was because both the Shannon and the Helvetia were of smaller dimensions, although each measured 100 meters stem to stern. Now then, the biggest whales, those rorqual whales that frequent the waterways of the Aleutian Islands, have never exceeded a length of 56 meters—if they reach even that. *userIdor's Note: About 106 meters. An English foot is only 30.4 centimeters. One after another, reports arrived that would profoundly affect public opinion: new observations taken by the transatlantic liner Pereire , the Inman line's Etna running afoul of the monster, an official report drawn up by officers on the French frigate Normandy , dead–earnest reckonings obtained by the general staff of Commodore Fitz–James aboard the Lord Clyde .
In lighthearted countries, people joked about this phenomenon, but such serious, practical countries as England, America, and Germany were deeply concerned. In every big city the monster was the latest rage; they sang about it in the coffee houses, they ridiculed it in the newspapers, they dramatized it in the theaters.
The tabloids found it a fine opportunity for hatching all sorts of hoaxes. In those newspapers short of copy, you saw the reappearance of every gigantic imaginary creature, from "Moby Dick," that dreadful white whale from the High Arctic regions, to the stupendous kraken whose tentacles could entwine a 500–ton craft and drag it into the ocean depths.
They even reprinted reports from ancient times: the views of Aristotle and Pliny accepting the existence of such monsters, then the Norwegian stories of Bishop Pontoppidan, the narratives of Paul Egede, and finally the reports of Captain Harrington—whose good faith is above suspicion—in which he claims he saw, while aboard the Castilian in 1857, one of those enormous serpents that, until then, had frequented only the seas of France's old extremist newspaper, The Constitutionalist . An interminable debate then broke out between believers and skeptics in the scholarly societies and scientific journals.
The "monster question" inflamed all minds.
During this memorable campaign, journalists making a profession of science battled with those making a profession of wit, spilling waves of ink and some of them even two or three drops of blood, since they went from sea serpents to the most offensive personal remarks. For six months the war seesawed.
With inexhaustible zest, the popular press took potshots at feature articles from the Geographic Institute of Brazil, the Royal Academy of Science in Berlin, the British Association, the Smithsonian Institution in Washington, D.C., at discussions in The Indian Archipelago, in Cosmos published by Father Moigno, in Petermann's Mittheilungen ,* and at scientific chronicles in the great French and foreign newspapers.
When the monster's detractors cited a saying by the botanist Linnaeus that "nature doesn't make leaps," witty writers in the popular periodicals parodied it, maintaining in essence that "nature doesn't make lunatics,\" and ordering their contemporaries never to give the lie to nature by believing in krakens, sea serpents, \"Moby Dicks,\" and other all–out efforts from drunken seamen. Finally, in a much–feared satirical journal, an article by its most popular columnist finished off the monster for good, spurning it in the style of Hippolytus repulsing the amorous advances of his stepmother Phædra, and giving the creature its quietus amid a universal burst of laughter. Wit had defeated science. *German: \"Bulletin. Ed.
During the first months of the year 1867, the question seemed to be buried, and it didn't seem due for resurrection, when new facts were brought to the public's attention.
But now it was no longer an issue of a scientific problem to be solved, but a quite real and serious danger to be avoided. The question took an entirely new turn. The monster again became an islet, rock, or reef, but a runaway reef, unfixed and elusive. On March 5, 1867, the Moravian from the Montreal Ocean Co., lying during the night in latitude 27° 30' and longitude 72° 15', ran its starboard quarter afoul of a rock marked on no charts of these waterways. Under the combined efforts of wind and 400–horsepower steam, it was traveling at a speed of thirteen knots.
Without the high quality of its hull, the Moravian would surely have split open from this collision and gone down together with those 237 passengers it was bringing back from Canada. This accident happened around five o'clock in the morning, just as day was beginning to break.
The officers on watch rushed to the craft's stern. They examined the ocean with the most scrupulous care. They saw nothing except a strong eddy breaking three cable lengths out, as if those sheets of water had been violently churned. The site's exact bearings were taken, and the Moravian continued on course apparently undamaged. Had it run afoul of an underwater rock or the wreckage of some enormous derelict ship? They were unable to say. But when they examined its undersides in the service yard, they discovered that part of its keel had been smashed.
This occurrence, extremely serious in itself, might perhaps have been forgotten like so many others, if three weeks later it hadn't been reenacted under identical conditions.
Only, thanks to the nationality of the ship victimized by this new ramming, and thanks to the reputation of the company to which this ship belonged, the event caused an immense uproar. No one is unaware of the name of that famous English shipowner, Cunard.
In 1840 this shrewd industrialist founded a postal service between Liverpool and Halifax, featuring three wooden ships with 400–horsepower paddle wheels and a burden of 1,162 metric tons. Eight years later, the company's assets were increased by four 650–horsepower ships at 1,820 metric tons, and in two more years, by two other vessels of still greater power and tonnage.
In 1853 the Cunard Co., whose mail–carrying charter had just been renewed, successively added to its assets the Arabia , the Persia , the China , the Scotia , the Java , and the Russia , all ships of top speed and, after the Great Eastern , the biggest ever to plow the seas. So in 1867 this company owned twelve ships, eight with paddle wheels and four with propellers. If I give these highly condensed details, it is so everyone can fully understand the importance of this maritime transportation company, known the world over for its shrewd management.
No transoceanic navigational undertaking has been conducted with more ability, no business dealings have been crowned with greater success.
In twenty–six years Cunard ships have made 2,000 Atlantic crossings without so much as a voyage canceled, a delay recorded, a man, a craft, or even a letter lost. Accordingly, despite strong competition from France, passengers still choose the Cunard line in preference to all others, as can be seen in a recent survey of official documents. Given this, no one will be astonished at the uproar provoked by this accident involving one of its finest steamers. On April 13, 1867, with a smooth sea and a moderate breeze, the Scotia lay in longitude 15° 12' and latitude 45° 37'. It was traveling at a speed of 13.43 knots under the thrust of its 1,000–horsepower engines. Its paddle wheels were churning the sea with perfect steadiness. It was then drawing 6.7 meters of water and displacing 6,624 cubic meters.
At 4:17 in the afternoon, during a high tea for passengers gathered in the main lounge, a collision occurred, scarcely noticeable on the whole, affecting the Scotia's hull in that quarter a little astern of its port paddle wheel. The Scotia hadn't run afoul of something, it had been fouled, and by a cutting or perforating instrument rather than a blunt one. This encounter seemed so minor that nobody on board would have been disturbed by it, had it not been for the shouts of crewmen in the hold, who climbed on deck yelling: "We're sinking!
We're sinking!"
At first the passengers were quite frightened, but Captain Anderson hastened to reassure them.
In fact, there could be no immediate danger. Divided into seven compartments by watertight bulkheads, the Scotia could brave any leak with impunity.
Captain Anderson immediately made his way into the hold.
He discovered that the fifth compartment had been invaded by the sea, and the speed of this invasion proved that the leak was considerable. Fortunately this compartment didn't contain the boilers, because their furnaces would have been abruptly extinguished. Captain Anderson called an immediate halt, and one of his sailors dived down to assess the damage.
Within moments they had located a hole two meters in width on the steamer's underside. Such a leak could not be patched, and with its paddle wheels half swamped, the Scotia had no choice but to continue its voyage. By then it lay 300 miles from Cape Clear, and after three days of delay that filled Liverpool with acute anxiety, it entered the company docks.
The engineers then proceeded to inspect the Scotia , which had been put in dry dock. They couldn't believe their eyes. Two and a half meters below its waterline, there gaped a symmetrical gash in the shape of an isosceles triangle. This breach in the sheet iron was so perfectly formed, no punch could have done a cleaner job of it. Consequently, it must have been produced by a perforating tool of uncommon toughness—plus, after being launched with prodigious power and then piercing four centimeters of sheet iron, this tool had needed to withdraw itself by a backward motion truly inexplicable. This was the last straw, and it resulted in arousing public passions all over again.
Indeed, from this moment on, any maritime casualty without an established cause was charged to the monster's account.
This outrageous animal had to shoulder responsibility for all derelict vessels, whose numbers are unfortunately considerable, since out of those 3,000 ships whose losses are recorded annually at the marine insurance bureau, the figure for steam or sailing ships supposedly lost with all hands, in the absence of any news, amounts to at least 200! Now then, justly or unjustly, it was the "monster" who stood accused of their disappearance; and since, thanks to it, travel between the various continents had become more and more dangerous, the public spoke up and demanded straight out that, at all cost, the seas be purged of this fearsome cetacean.`,
        },
        {
          title: 'Story One: Mike is a Cook',
          level: 1,
          imageId: 'chef_enitya',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `Hi there.
These are stories that I want you to listen to.
They use the most common verbs in the language.
It's a place to practice basic structures in the language.
The story is told twice, and then there are questions.
And you can choose to answer the questions, or just listen to the answers that I provide.
So, story number one about Mike who works in a restaurant.
A) Mike gets up at six am every morning.
He makes breakfast and drinks a coffee.
He drives to work in his car.
His work starts at seven thirty am.
Mike is a cook at a restaurant.
He makes food for hungry customers.
The customers are from many countries.
They speak many different languages.
Mike can meet many friendly people.
Mike is happy when he talks to the customers.
Now I want you to listen to the same story, but this time told by Mike.
You'll notice it's a little different.
Here's Mike.
B) I get up at six am every morning.
I make breakfast and drink a coffee.
I drive to work in my car.
My work starts at seven thirty am.
I am a cook at a restaurant.
I make food for hungry customers.
The customers are from many different countries.
They speak many different languages.
I can meet many friendly people.
I am happy when I talk to the customers.
Now I want you to listen to the questions and if you think you can answer, please do so.
Out loud or not out loud, or just listen to the answers – it's up to you.
Questions:
One: Mike wakes up at six am every morning.
Does Mike wake up early?
Yes, Mike wakes up at six am every morning.
Two: Mike drinks a coffee.
Does Mike drink a tea?
No, Mike does not drink a tea, he drinks a coffee.
Three: Mike drives his car to work.
Does Mike drive his car to work?
Yes, Mike drives his car to work.
Four: Mike's work starts at seven thirty am.
Does Mike's work start at seven am?
No, Mike's work does not start at seven am.
It starts at seven thirty am.
Five: Mike is a cook at a restaurant.
Is Mike a cook?
Yes, Mike is a cook at a restaurant.
Six: The customers are from many different countries.
Are the customers from one country?
No, the customers are not from one country.
They are from many different countries.
Seven: The customers are friendly.
Are the customers friendly?
Yes, the customers are friendly.
Eight: Mike feels happy when he talks to the customers.
Does Mike feel happy when he talks to the customers?
Yes, Mike feels happy when he talks to the customers.
Alright, and that completes your first lesson in this series of mini stories that are going to help you understand and be able to use the English language.
I invite you to listen to the next story.
Bye for now.`,
        },
        {
          title: 'Story Two: Dustin Wants to Take a Vacation',
          level: 1,
          imageId:
            'Beach_20Vacation_20Packing_20List-2021_GettyImages-1030311160_yq8aaw',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `Now let's listen to the story of Dustin, who is excited about his winter holiday.
A) Dustin is excited for the winter holiday.
He has some time off in the winter.
He doesn't have to work for two weeks.
He wants to go on vacation.
But, he doesn't know where to go.
He wants to go to France.
But France is expensive.
The airplane tickets cost a lot.
And Dustin doesn't speak French.
He decides to study, save money, or stay home.
Now let's listen to the same story told by Dustin.
B) I am excited for the winter holiday.
I have some time off in the winter.
I don't have to work for two weeks.
I want to go on vacation.
But, I don't know where to go.
I want to go to France.
But France is expensive.
The airplane tickets cost a lot.
And I don't speak French.
I decide to study, save money, or stay home.
Now let's look at some questions. You can just listen if you want, or if you want to try to answer the questions, please do so, either silently or out loud.
Questions:
One: Dustin is excited for the winter holidays. Is Dustin excited? Yes, Dustin is excited for the winter holidays.
Two: Dustin has time off in the winter. Does Dustin have free time in the winter? Yes, Dustin has time off in the winter.
Three: Dustin wants to go on vacation. Does Dustin want to stay home? No, Dustin does not want to stay home. He wants to go on vacation.
Four: Dustin doesn't know where to go. Does Dustin know where to go? No, Dustin doesn't know where to go.
Five: Dustin wants to go to France for his vacation. Does Dustin want to go to France? Yes, Dustin wants to go to France for his vacation.
Six: France is expensive. Is France cheap?
No, France is not cheap. France is expensive.
Seven: Dustin does not speak French. Does Dustin speak French? No, Dustin does not speak French.
Eight: Dustin decides to study French, save money, or stay home for the vacation. Does Dustin decide to study French? Yes, he decides to study French, save money, or stay home for the vacation.
And there you have it, the story of Dustin who wanted to go on vacation. Thank you for listening, and we'll look forward to the next story.`,
        },
        {
          title: 'Story Three: Karen Gets a Cat',
          level: 1,
          imageId: 'ewudemhpsk9eioupqhyh',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `A) Karen is bored at work and at home.
She does the same thing every day.
She wants a new hobby.
First, she tries to cook.
But her food does not taste good.
Then, she tries to swim.
But she is afraid of water.
Karen walks home and sees a pet store.
In the pet store, she sees a cat!
Karen buys the cat, and is now very happy.
Now the same story told by Karen.
B) I am bored at work and at home.
I do the same thing every day.
I want a new hobby.
First, I try to cook.
But my food does not taste good.
Then, I try to swim.
But I am afraid of water.
I walk home and see a pet store.
In the pet store, I see a cat!
I buy the cat, and am now very happy.
Now some questions about the story. I will say the answer after the question.
Questions:
One: Karen is bored at work, and at home. Is Karen happy at work? No, Karen is not happy at work. She is bored at work, and at home.
Two: Karen does the same thing every day. Does Karen do many new things?
No, Karen does the same thing every day.
Three: Karen wants a new hobby. Does Karen want a new hobby? Yes, Karen wants a new hobby.
Four: Karen's food does not taste good. Is Karen a good cook? No, Karen is not a good cook. Her food does not taste good.
Five: Karen is afraid of water. Does Karen like swimming? No, Karen does not like swimming. She is afraid of water.
Six: Karen sees a cat in a pet store. Does Karen see a cat in a store? Yes Karen sees a cat in a pet store.
Seven: Karen buys the cat from the pet store. Does Karen buy the cat? Yes, Karen buys the cat from the pet store.
Eight: Karen is now very happy because she has a cat. Is Karen bored now? No, Karen is not bored. She is now very happy because she has a cat.`,
        },
        {
          title: 'Story Four: My Daughter is a Good Student',
          level: 1,
          imageId: '100602603_bibkhu',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `
A) My daughter goes to school every day.
She likes school very much.
She is a good student at school.
The teachers like my daughter a lot.
My daughter also has many friends.
Her best friend is Amy.
Amy likes math and science.
My daughter likes English and history.
They help each other with homework.
They study hard and do well in school.
Now the same story told by the daughter.
B) I go to school every day.
I like school very much.
I am a good student at school.
My teachers like me a lot.
I also have many friends.
My best friend is Amy.
She likes math and science.
I like English and history.
We help each other with homework.
We study hard and do well in school.
Now some questions about the story. I will say the answer after the question.
Questions:
One: The daughter goes to school every day. Does the daughter go to school every day? Yes, she goes to school every day.
Two: The daughter likes school. Does the daughter like school? Yes, she likes school.
Three: The daughter is a good student. Is the daughter a bad student? No, the daughter is not a bad student. She is a good student.
Four: The teachers like the daughter. Do the teachers like the daughter? Yes, the teachers like her.
Five: Her best friend is named Amy. Is her best friend named Julie? No, her best friend is named Amy.
Six: Amy likes math and science. Does Amy like English and history?
No, she likes math and science.
Seven: The daughter and Amy do well in school. Does the daughter do well in school? Yes, the daughter and Amy do well in school.`,
        },
        {
          title: 'Canadian English: Chapter II, Part 1',
          level: 4,
          imageId: 'yiylevm1kp1ip5iebhsj',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `The first Canadians were the native Indians who came from Asia over 10,000 years ago.
They were fishers, hunters and farmers. They developed different cultures in different areas. In Central America these people developed one of the most famous independent centres of world civilization, with science, writing and advanced construction techniques. Scientists now believe there were different waves of settlement from Asia which spread out over the American continent. That is why there are different language groups in different areas. There may have been other visitors to North America over the centuries but we do not know for sure.
The first known European visitors were the Vikings roughly 1,000 years ago. Because of wars and pressure on the land, some Vikings had left Europe and settled in Iceland. For the same reasons they moved on to Greenland. The world was warmer at that time, otherwise Greenland would not have been called Greenland. From there the Vikings went further west and stopped on the east coast of Canada. They found nature there to be very pleasant, green and rich. They fought with the local natives, some of their people were killed and therefore they left and returned to Iceland.
Western Europeans were fishing off the east coast of Canada in the 16th century. Eventually French and English people started settling as farmers and fur traders all along the Atlantic Coast of North America.
Wars between European powers like France, England, Spain and Holland affected developments in North America. In 1763 England defeated France at the battle of Quebec and this meant that Canada became English instead of French. At that time most Europeans in Canada were French speakers. This now started to change.
In 1776 the American War of Independence took place. A new nation was created. The United States. Many people living in the new United States wanted to remain a part of the British Empire. Many tens of thousands of people moved north to Canada. These were the United Empire Loyalists. This was the first large scale movement of English speaking people into Canada. These people were really Americans and they determined how Canadians would speak English.
These people wanted to remain loyal to the King of England. During the 19th century there was major immigration from Great Britain to Canada. Much of this immigration was from Scotland and Northern Ireland. As a result Canada was very closely attached to the British Empire.`,
        },
        {
          title: 'Alice in Wonderland, Chapter One: Down the Rabbit Hole',
          level: 4,
          imageId: 'h2spgkrzt40anglqa5s2',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”

So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.

There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.

In another moment down went Alice after it, never once considering how in the world she was to get out again.

The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.

Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled “ORANGE MARMALADE”, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody underneath, so managed to put it into one of the cupboards as she fell past it.

“Well!” thought Alice to herself, “after such a fall as this, I shall think nothing of tumbling down stairs! How brave they’ll all think me at home! Why, I wouldn’t say anything about it, even if I fell off the top of the house!” (Which was very likely true.)

Down, down, down. Would the fall never come to an end? “I wonder how many miles I’ve fallen by this time?” she said aloud. “I must be getting somewhere near the centre of the earth. Let me see: that would be four thousand miles down, I think—” (for, you see, Alice had learnt several things of this sort in her lessons in the schoolroom, and though this was not a very good opportunity for showing off her knowledge, as there was no one to listen to her, still it was good practice to say it over) “—yes, that’s about the right distance—but then I wonder what Latitude or Longitude I’ve got to?” (Alice had no idea what Latitude was, or Longitude either, but thought they were nice grand words to say.)

Presently she began again. “I wonder if I shall fall right through the earth! How funny it’ll seem to come out among the people that walk with their heads downward! The Antipathies, I think—” (she was rather glad there was no one listening, this time, as it didn’t sound at all the right word) “—but I shall have to ask them what the name of the country is, you know. Please, Ma’am, is this New Zealand or Australia?” (and she tried to curtsey as she spoke—fancy curtseying as you’re falling through the air! Do you think you could manage it?) “And what an ignorant little girl she’ll think me for asking! No, it’ll never do to ask: perhaps I shall see it written up somewhere.”

Down, down, down. There was nothing else to do, so Alice soon began talking again. “Dinah’ll miss me very much to-night, I should think!” (Dinah was the cat.) “I hope they’ll remember her saucer of milk at tea-time. Dinah my dear! I wish you were down here with me! There are no mice in the air, I’m afraid, but you might catch a bat, and that’s very like a mouse, you know. But do cats eat bats, I wonder?” And here Alice began to get rather sleepy, and went on saying to herself, in a dreamy sort of way, “Do cats eat bats? Do cats eat bats?” and sometimes, “Do bats eat cats?” for, you see, as she couldn’t answer either question, it didn’t much matter which way she put it. She felt that she was dozing off, and had just begun to dream that she was walking hand in hand with Dinah, and saying to her very earnestly, “Now, Dinah, tell me the truth: did you ever eat a bat?” when suddenly, thump! thump! down she came upon a heap of sticks and dry leaves, and the fall was over.

Alice was not a bit hurt, and she jumped up on to her feet in a moment: she looked up, but it was all dark overhead; before her was another long passage, and the White Rabbit was still in sight, hurrying down it. There was not a moment to be lost: away went Alice like the wind, and was just in time to hear it say, as it turned a corner, “Oh my ears and whiskers, how late it’s getting!” She was close behind it when she turned the corner, but the Rabbit was no longer to be seen: she found herself in a long, low hall, which was lit up by a row of lamps hanging from the roof.

There were doors all round the hall, but they were all locked; and when Alice had been all the way down one side and up the other, trying every door, she walked sadly down the middle, wondering how she was ever to get out again.

Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice’s first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them. However, on the second time round, she came upon a low curtain she had not noticed before, and behind it was a little door about fifteen inches high: she tried the little golden key in the lock, and to her great delight it fitted!

Alice opened the door and found that it led into a small passage, not much larger than a rat-hole: she knelt down and looked along the passage into the loveliest garden you ever saw. How she longed to get out of that dark hall, and wander about among those beds of bright flowers and those cool fountains, but she could not even get her head through the doorway; “and even if my head would go through,” thought poor Alice, “it would be of very little use without my shoulders. Oh, how I wish I could shut up like a telescope! I think I could, if I only knew how to begin.” For, you see, so many out-of-the-way things had happened lately, that Alice had begun to think that very few things indeed were really impossible.

There seemed to be no use in waiting by the little door, so she went back to the table, half hoping she might find another key on it, or at any rate a book of rules for shutting people up like telescopes: this time she found a little bottle on it, (“which certainly was not here before,” said Alice,) and round the neck of the bottle was a paper label, with the words “DRINK ME,” beautifully printed on it in large letters.

It was all very well to say “Drink me,” but the wise little Alice was not going to do that in a hurry. “No, I’ll look first,” she said, “and see whether it’s marked ‘poison’ or not”; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they would not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger very deeply with a knife, it usually bleeds; and she had never forgotten that, if you drink much from a bottle marked “poison,” it is almost certain to disagree with you, sooner or later.

However, this bottle was not marked “poison,” so Alice ventured to taste it, and finding it very nice, (it had, in fact, a sort of mixed flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered toast,) she very soon finished it off.

*      *      *      *      *      *      *

“What a curious feeling!” said Alice; “I must be shutting up like a telescope.”

And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; “for it might end, you know,” said Alice to herself, “in my going out altogether, like a candle. I wonder what I should be like then?” And she tried to fancy what the flame of a candle is like after the candle is blown out, for she could not remember ever having seen such a thing.

After a while, finding that nothing more happened, she decided on going into the garden at once; but, alas for poor Alice! when she got to the door, she found she had forgotten the little golden key, and when she went back to the table for it, she found she could not possibly reach it: she could see it quite plainly through the glass, and she tried her best to climb up one of the legs of the table, but it was too slippery; and when she had tired herself out with trying, the poor little thing sat down and cried.

“Come, there’s no use in crying like that!” said Alice to herself, rather sharply; “I advise you to leave off this minute!” She generally gave herself very good advice, (though she very seldom followed it), and sometimes she scolded herself so severely as to bring tears into her eyes; and once she remembered trying to box her own ears for having cheated herself in a game of croquet she was playing against herself, for this curious child was very fond of pretending to be two people. “But it’s no use now,” thought poor Alice, “to pretend to be two people! Why, there’s hardly enough of me left to make one respectable person!”

Soon her eye fell on a little glass box that was lying under the table: she opened it, and found in it a very small cake, on which the words “EAT ME” were beautifully marked in currants. “Well, I’ll eat it,” said Alice, “and if it makes me grow larger, I can reach the key; and if it makes me grow smaller, I can creep under the door; so either way I’ll get into the garden, and I don’t care which happens!”

She ate a little bit, and said anxiously to herself, “Which way? Which way?”, holding her hand on the top of her head to feel which way it was growing, and she was quite surprised to find that she remained the same size: to be sure, this generally happens when one eats cake, but Alice had got so much into the way of expecting nothing but out-of-the-way things to happen, that it seemed quite dull and stupid for life to go on in the common way.

So she set to work, and very soon finished off the cake.`,
        },
        {
          title: 'Alice in Wonderland, Chapter Two: The Pool of Tears',
          level: 4,
          imageId: 'h2spgkrzt40anglqa5s2',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); “now I’m opening out like the largest telescope that ever was! Good-bye, feet!” (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). “Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I’m sure I shan’t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can;—but I must be kind to them,” thought Alice, “or perhaps they won’t walk the way I want to go! Let me see: I’ll give them a new pair of boots every Christmas.”

And she went on planning to herself how she would manage it. “They must go by the carrier,” she thought; “and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!

     Alice’s Right Foot, Esq.,
       Hearthrug,
         near the Fender,
           (with Alice’s love).
Oh dear, what nonsense I’m talking!”

Just then her head struck against the roof of the hall: in fact she was now more than nine feet high, and she at once took up the little golden key and hurried off to the garden door.

Poor Alice! It was as much as she could do, lying down on one side, to look through into the garden with one eye; but to get through was more hopeless than ever: she sat down and began to cry again.

“You ought to be ashamed of yourself,” said Alice, “a great girl like you,” (she might well say this), “to go on crying in this way! Stop this moment, I tell you!” But she went on all the same, shedding gallons of tears, until there was a large pool all round her, about four inches deep and reaching half down the hall.

After a time she heard a little pattering of feet in the distance, and she hastily dried her eyes to see what was coming. It was the White Rabbit returning, splendidly dressed, with a pair of white kid gloves in one hand and a large fan in the other: he came trotting along in a great hurry, muttering to himself as he came, “Oh! the Duchess, the Duchess! Oh! won’t she be savage if I’ve kept her waiting!” Alice felt so desperate that she was ready to ask help of any one; so, when the Rabbit came near her, she began, in a low, timid voice, “If you please, sir—” The Rabbit started violently, dropped the white kid gloves and the fan, and skurried away into the darkness as hard as he could go.

Alice took up the fan and gloves, and, as the hall was very hot, she kept fanning herself all the time she went on talking: “Dear, dear! How queer everything is to-day! And yesterday things went on just as usual. I wonder if I’ve been changed in the night? Let me think: was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I’m not the same, the next question is, Who in the world am I? Ah, that’s the great puzzle!” And she began thinking over all the children she knew that were of the same age as herself, to see if she could have been changed for any of them.

“I’m sure I’m not Ada,” she said, “for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all; and I’m sure I can’t be Mabel, for I know all sorts of things, and she, oh! she knows such a very little! Besides, she’s she, and I’m I, and—oh dear, how puzzling it all is! I’ll try if I know all the things I used to know. Let me see: four times five is twelve, and four times six is thirteen, and four times seven is—oh dear! I shall never get to twenty at that rate! However, the Multiplication Table doesn’t signify: let’s try Geography. London is the capital of Paris, and Paris is the capital of Rome, and Rome—no, that’s all wrong, I’m certain! I must have been changed for Mabel! I’ll try and say ‘How doth the little—’” and she crossed her hands on her lap as if she were saying lessons, and began to repeat it, but her voice sounded hoarse and strange, and the words did not come the same as they used to do:—

“How doth the little crocodile
    Improve his shining tail,
And pour the waters of the Nile
    On every golden scale!

“How cheerfully he seems to grin,
    How neatly spread his claws,
And welcome little fishes in
    With gently smiling jaws!”

“I’m sure those are not the right words,” said poor Alice, and her eyes filled with tears again as she went on, “I must be Mabel after all, and I shall have to go and live in that poky little house, and have next to no toys to play with, and oh! ever so many lessons to learn! No, I’ve made up my mind about it; if I’m Mabel, I’ll stay down here! It’ll be no use their putting their heads down and saying ‘Come up again, dear!’ I shall only look up and say ‘Who am I then? Tell me that first, and then, if I like being that person, I’ll come up: if not, I’ll stay down here till I’m somebody else’—but, oh dear!” cried Alice, with a sudden burst of tears, “I do wish they would put their heads down! I am so very tired of being all alone here!”

As she said this she looked down at her hands, and was surprised to see that she had put on one of the Rabbit’s little white kid gloves while she was talking. “How can I have done that?” she thought. “I must be growing small again.” She got up and went to the table to measure herself by it, and found that, as nearly as she could guess, she was now about two feet high, and was going on shrinking rapidly: she soon found out that the cause of this was the fan she was holding, and she dropped it hastily, just in time to avoid shrinking away altogether.

“That was a narrow escape!” said Alice, a good deal frightened at the sudden change, but very glad to find herself still in existence; “and now for the garden!” and she ran with all speed back to the little door: but, alas! the little door was shut again, and the little golden key was lying on the glass table as before, “and things are worse than ever,” thought the poor child, “for I never was so small as this before, never! And I declare it’s too bad, that it is!”

As she said these words her foot slipped, and in another moment, splash! she was up to her chin in salt water. Her first idea was that she had somehow fallen into the sea, “and in that case I can go back by railway,” she said to herself. (Alice had been to the seaside once in her life, and had come to the general conclusion, that wherever you go to on the English coast you find a number of bathing machines in the sea, some children digging in the sand with wooden spades, then a row of lodging houses, and behind them a railway station.) However, she soon made out that she was in the pool of tears which she had wept when she was nine feet high.

“I wish I hadn’t cried so much!” said Alice, as she swam about, trying to find her way out. “I shall be punished for it now, I suppose, by being drowned in my own tears! That will be a queer thing, to be sure! However, everything is queer to-day.”

Just then she heard something splashing about in the pool a little way off, and she swam nearer to make out what it was: at first she thought it must be a walrus or hippopotamus, but then she remembered how small she was now, and she soon made out that it was only a mouse that had slipped in like herself.

“Would it be of any use, now,” thought Alice, “to speak to this mouse? Everything is so out-of-the-way down here, that I should think very likely it can talk: at any rate, there’s no harm in trying.” So she began: “O Mouse, do you know the way out of this pool? I am very tired of swimming about here, O Mouse!” (Alice thought this must be the right way of speaking to a mouse: she had never done such a thing before, but she remembered having seen in her brother’s Latin Grammar, “A mouse—of a mouse—to a mouse—a mouse—O mouse!”) The Mouse looked at her rather inquisitively, and seemed to her to wink with one of its little eyes, but it said nothing.

“Perhaps it doesn’t understand English,” thought Alice; “I daresay it’s a French mouse, come over with William the Conqueror.” (For, with all her knowledge of history, Alice had no very clear notion how long ago anything had happened.) So she began again: “Où est ma chatte?” which was the first sentence in her French lesson-book. The Mouse gave a sudden leap out of the water, and seemed to quiver all over with fright. “Oh, I beg your pardon!” cried Alice hastily, afraid that she had hurt the poor animal’s feelings. “I quite forgot you didn’t like cats.”

“Not like cats!” cried the Mouse, in a shrill, passionate voice. “Would you like cats if you were me?”

“Well, perhaps not,” said Alice in a soothing tone: “don’t be angry about it. And yet I wish I could show you our cat Dinah: I think you’d take a fancy to cats if you could only see her. She is such a dear quiet thing,” Alice went on, half to herself, as she swam lazily about in the pool, “and she sits purring so nicely by the fire, licking her paws and washing her face—and she is such a nice soft thing to nurse—and she’s such a capital one for catching mice—oh, I beg your pardon!” cried Alice again, for this time the Mouse was bristling all over, and she felt certain it must be really offended. “We won’t talk about her any more if you’d rather not.”

“We indeed!” cried the Mouse, who was trembling down to the end of his tail. “As if I would talk on such a subject! Our family always hated cats: nasty, low, vulgar things! Don’t let me hear the name again!”

“I won’t indeed!” said Alice, in a great hurry to change the subject of conversation. “Are you—are you fond—of—of dogs?” The Mouse did not answer, so Alice went on eagerly: “There is such a nice little dog near our house I should like to show you! A little bright-eyed terrier, you know, with oh, such long curly brown hair! And it’ll fetch things when you throw them, and it’ll sit up and beg for its dinner, and all sorts of things—I can’t remember half of them—and it belongs to a farmer, you know, and he says it’s so useful, it’s worth a hundred pounds! He says it kills all the rats and—oh dear!” cried Alice in a sorrowful tone, “I’m afraid I’ve offended it again!” For the Mouse was swimming away from her as hard as it could go, and making quite a commotion in the pool as it went.

So she called softly after it, “Mouse dear! Do come back again, and we won’t talk about cats or dogs either, if you don’t like them!” When the Mouse heard this, it turned round and swam slowly back to her: its face was quite pale (with passion, Alice thought), and it said in a low trembling voice, “Let us get to the shore, and then I’ll tell you my history, and you’ll understand why it is I hate cats and dogs.”

It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures. Alice led the way, and the whole party swam to the shore.`,
        },
        {
          title: 'Huckleberry Finn, Chapter One',
          level: 5,
          imageId: '71h7PNNAX-L._AC_SL1000__kqkfnz',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `YOU don't know about me without you have read a book by the name of The
Adventures of Tom Sawyer; but that ain't no matter.  That book was made
by Mr. Mark Twain, and he told the truth, mainly.  There was things which
he stretched, but mainly he told the truth.  That is nothing.  I never
seen anybody but lied one time or another, without it was Aunt Polly, or
the widow, or maybe Mary.  Aunt Polly--Tom's Aunt Polly, she is--and
Mary, and the Widow Douglas is all told about in that book, which is
mostly a true book, with some stretchers, as I said before.

Now the way that the book winds up is this:  Tom and me found the money
that the robbers hid in the cave, and it made us rich.  We got six
thousand dollars apiece--all gold.  It was an awful sight of money when
it was piled up.  Well, Judge Thatcher he took it and put it out at
interest, and it fetched us a dollar a day apiece all the year round
--more than a body could tell what to do with.  The Widow Douglas she took
me for her son, and allowed she would sivilize me; but it was rough
living in the house all the time, considering how dismal regular and
decent the widow was in all her ways; and so when I couldn't stand it no
longer I lit out.  I got into my old rags and my sugar-hogshead again,
and was free and satisfied.  But Tom Sawyer he hunted me up and said he
was going to start a band of robbers, and I might join if I would go back
to the widow and be respectable.  So I went back.

The widow she cried over me, and called me a poor lost lamb, and she
called me a lot of other names, too, but she never meant no harm by it.
She put me in them new clothes again, and I couldn't do nothing but sweat
and sweat, and feel all cramped up.  Well, then, the old thing commenced
again.  The widow rung a bell for supper, and you had to come to time.
When you got to the table you couldn't go right to eating, but you had to
wait for the widow to tuck down her head and grumble a little over the
victuals, though there warn't really anything the matter with them,--that
is, nothing only everything was cooked by itself.  In a barrel of odds
and ends it is different; things get mixed up, and the juice kind of
swaps around, and the things go better.

After supper she got out her book and learned me about Moses and the
Bulrushers, and I was in a sweat to find out all about him; but by and by
she let it out that Moses had been dead a considerable long time; so then
I didn't care no more about him, because I don't take no stock in dead
people.

Pretty soon I wanted to smoke, and asked the widow to let me.  But she
wouldn't.  She said it was a mean practice and wasn't clean, and I must
try to not do it any more.  That is just the way with some people.  They
get down on a thing when they don't know nothing about it.  Here she was
a-bothering about Moses, which was no kin to her, and no use to anybody,
being gone, you see, yet finding a power of fault with me for doing a
thing that had some good in it.  And she took snuff, too; of course that
was all right, because she done it herself.

Her sister, Miss Watson, a tolerable slim old maid, with goggles on,
had just come to live with her, and took a set at me now with a
spelling-book. She worked me middling hard for about an hour, and then
the widow made her ease up.  I couldn't stood it much longer.  Then for
an hour it was deadly dull, and I was fidgety.  Miss Watson would say,
"Don't put your feet up there, Huckleberry;" and "Don't scrunch up like
that, Huckleberry--set up straight;" and pretty soon she would say,
"Don't gap and stretch like that, Huckleberry--why don't you try to
behave?"  Then she told me all about the bad place, and I said I wished I
was there. She got mad then, but I didn't mean no harm.  All I wanted was
to go somewheres; all I wanted was a change, I warn't particular.  She
said it was wicked to say what I said; said she wouldn't say it for the
whole world; she was going to live so as to go to the good place.  Well,
I couldn't see no advantage in going where she was going, so I made up my
mind I wouldn't try for it.  But I never said so, because it would only
make trouble, and wouldn't do no good.

Now she had got a start, and she went on and told me all about the good
place.  She said all a body would have to do there was to go around all
day long with a harp and sing, forever and ever.  So I didn't think much
of it. But I never said so.  I asked her if she reckoned Tom Sawyer would
go there, and she said not by a considerable sight.  I was glad about
that, because I wanted him and me to be together.

Miss Watson she kept pecking at me, and it got tiresome and lonesome.  By
and by they fetched the niggers in and had prayers, and then everybody
was off to bed.  I went up to my room with a piece of candle, and put it
on the table.  Then I set down in a chair by the window and tried to
think of something cheerful, but it warn't no use.  I felt so lonesome I
most wished I was dead.  The stars were shining, and the leaves rustled
in the woods ever so mournful; and I heard an owl, away off, who-whooing
about somebody that was dead, and a whippowill and a dog crying about
somebody that was going to die; and the wind was trying to whisper
something to me, and I couldn't make out what it was, and so it made the
cold shivers run over me. Then away out in the woods I heard that kind of
a sound that a ghost makes when it wants to tell about something that's
on its mind and can't make itself understood, and so can't rest easy in
its grave, and has to go about that way every night grieving.  I got so
down-hearted and scared I did wish I had some company.  Pretty soon a
spider went crawling up my shoulder, and I flipped it off and it lit in
the candle; and before I could budge it was all shriveled up.  I didn't
need anybody to tell me that that was an awful bad sign and would fetch
me some bad luck, so I was scared and most shook the clothes off of me.
I got up and turned around in my tracks three times and crossed my breast
every time; and then I tied up a little lock of my hair with a thread to
keep witches away.  But I hadn't no confidence.  You do that when you've
lost a horseshoe that you've found, instead of nailing it up over the
door, but I hadn't ever heard anybody say it was any way to keep off bad
luck when you'd killed a spider.

I set down again, a-shaking all over, and got out my pipe for a smoke;
for the house was all as still as death now, and so the widow wouldn't
know. Well, after a long time I heard the clock away off in the town go
boom--boom--boom--twelve licks; and all still again--stiller than ever.
Pretty soon I heard a twig snap down in the dark amongst the trees
--something was a stirring.  I set still and listened.  Directly I could
just barely hear a "me-yow! me-yow!" down there.  That was good!  Says I,
"me-yow! me-yow!" as soft as I could, and then I put out the light and
scrambled out of the window on to the shed.  Then I slipped down to the
ground and crawled in among the trees, and, sure enough, there was Tom
Sawyer waiting for me.”

It was high time to go, for the pool was getting quite crowded with the birds and animals that had fallen into it: there were a Duck and a Dodo, a Lory and an Eaglet, and several other curious creatures. Alice led the way, and the whole party swam to the shore.`,
        },
        {
          title: 'Huckleberry Finn, Chapter Two',
          level: 5,
          imageId: '71h7PNNAX-L._AC_SL1000__kqkfnz',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `WE went tiptoeing along a path amongst the trees back towards the end of
the widow's garden, stooping down so as the branches wouldn't scrape our
heads. When we was passing by the kitchen I fell over a root and made a
noise.  We scrouched down and laid still.  Miss Watson's big nigger,
named Jim, was setting in the kitchen door; we could see him pretty
clear, because there was a light behind him.  He got up and stretched his
neck out about a minute, listening.  Then he says:

"Who dah?"

He listened some more; then he come tiptoeing down and stood right
between us; we could a touched him, nearly.  Well, likely it was minutes
and minutes that there warn't a sound, and we all there so close
together.  There was a place on my ankle that got to itching, but I
dasn't scratch it; and then my ear begun to itch; and next my back, right
between my shoulders.  Seemed like I'd die if I couldn't scratch.  Well,
I've noticed that thing plenty times since.  If you are with the quality,
or at a funeral, or trying to go to sleep when you ain't sleepy--if you
are anywheres where it won't do for you to scratch, why you will itch all
over in upwards of a thousand places. Pretty soon Jim says:

"Say, who is you?  Whar is you?  Dog my cats ef I didn' hear sumf'n.
Well, I know what I's gwyne to do:  I's gwyne to set down here and listen
tell I hears it agin."

So he set down on the ground betwixt me and Tom.  He leaned his back up
against a tree, and stretched his legs out till one of them most touched
one of mine.  My nose begun to itch.  It itched till the tears come into
my eyes.  But I dasn't scratch.  Then it begun to itch on the inside.
Next I got to itching underneath.  I didn't know how I was going to set
still. This miserableness went on as much as six or seven minutes; but it
seemed a sight longer than that.  I was itching in eleven different
places now.  I reckoned I couldn't stand it more'n a minute longer, but I
set my teeth hard and got ready to try.  Just then Jim begun to breathe
heavy; next he begun to snore--and then I was pretty soon comfortable
again.

Tom he made a sign to me--kind of a little noise with his mouth--and we
went creeping away on our hands and knees.  When we was ten foot off Tom
whispered to me, and wanted to tie Jim to the tree for fun.  But I said
no; he might wake and make a disturbance, and then they'd find out I
warn't in. Then Tom said he hadn't got candles enough, and he would slip
in the kitchen and get some more.  I didn't want him to try.  I said Jim
might wake up and come.  But Tom wanted to resk it; so we slid in there
and got three candles, and Tom laid five cents on the table for pay.
Then we got out, and I was in a sweat to get away; but nothing would do
Tom but he must crawl to where Jim was, on his hands and knees, and play
something on him.  I waited, and it seemed a good while, everything was
so still and lonesome.

As soon as Tom was back we cut along the path, around the garden fence,
and by and by fetched up on the steep top of the hill the other side of
the house.  Tom said he slipped Jim's hat off of his head and hung it on
a limb right over him, and Jim stirred a little, but he didn't wake.
Afterwards Jim said the witches be witched him and put him in a trance,
and rode him all over the State, and then set him under the trees again,
and hung his hat on a limb to show who done it.  And next time Jim told
it he said they rode him down to New Orleans; and, after that, every time
he told it he spread it more and more, till by and by he said they rode
him all over the world, and tired him most to death, and his back was all
over saddle-boils.  Jim was monstrous proud about it, and he got so he
wouldn't hardly notice the other niggers.  Niggers would come miles to
hear Jim tell about it, and he was more looked up to than any nigger in
that country.  Strange niggers would stand with their mouths open and
look him all over, same as if he was a wonder.  Niggers is always talking
about witches in the dark by the kitchen fire; but whenever one was
talking and letting on to know all about such things, Jim would happen in
and say, "Hm!  What you know 'bout witches?" and that nigger was corked
up and had to take a back seat.  Jim always kept that five-center piece
round his neck with a string, and said it was a charm the devil give to
him with his own hands, and told him he could cure anybody with it and
fetch witches whenever he wanted to just by saying something to it; but
he never told what it was he said to it.  Niggers would come from all
around there and give Jim anything they had, just for a sight of that
five-center piece; but they wouldn't touch it, because the devil had had
his hands on it.  Jim was most ruined for a servant, because he got stuck
up on account of having seen the devil and been rode by witches.

Well, when Tom and me got to the edge of the hilltop we looked away down
into the village and could see three or four lights twinkling, where
there was sick folks, maybe; and the stars over us was sparkling ever so
fine; and down by the village was the river, a whole mile broad, and
awful still and grand.  We went down the hill and found Jo Harper and Ben
Rogers, and two or three more of the boys, hid in the old tanyard.  So we
unhitched a skiff and pulled down the river two mile and a half, to the
big scar on the hillside, and went ashore.

We went to a clump of bushes, and Tom made everybody swear to keep the
secret, and then showed them a hole in the hill, right in the thickest
part of the bushes.  Then we lit the candles, and crawled in on our hands
and knees.  We went about two hundred yards, and then the cave opened up.
Tom poked about amongst the passages, and pretty soon ducked under a wall
where you wouldn't a noticed that there was a hole.  We went along a
narrow place and got into a kind of room, all damp and sweaty and cold,
and there we stopped.  Tom says:

"Now, we'll start this band of robbers and call it Tom Sawyer's Gang.
Everybody that wants to join has got to take an oath, and write his name
in blood."

Everybody was willing.  So Tom got out a sheet of paper that he had wrote
the oath on, and read it.  It swore every boy to stick to the band, and
never tell any of the secrets; and if anybody done anything to any boy in
the band, whichever boy was ordered to kill that person and his family
must do it, and he mustn't eat and he mustn't sleep till he had killed
them and hacked a cross in their breasts, which was the sign of the band.
And nobody that didn't belong to the band could use that mark, and if he
did he must be sued; and if he done it again he must be killed.  And if
anybody that belonged to the band told the secrets, he must have his
throat cut, and then have his carcass burnt up and the ashes scattered
all around, and his name blotted off of the list with blood and never
mentioned again by the gang, but have a curse put on it and be forgot
forever.

Everybody said it was a real beautiful oath, and asked Tom if he got it
out of his own head.  He said, some of it, but the rest was out of
pirate-books and robber-books, and every gang that was high-toned had it.

Some thought it would be good to kill the FAMILIES of boys that told the
secrets.  Tom said it was a good idea, so he took a pencil and wrote it
in. Then Ben Rogers says:

"Here's Huck Finn, he hain't got no family; what you going to do 'bout
him?"

"Well, hain't he got a father?" says Tom Sawyer.

"Yes, he's got a father, but you can't never find him these days.  He
used to lay drunk with the hogs in the tanyard, but he hain't been seen
in these parts for a year or more."

They talked it over, and they was going to rule me out, because they said
every boy must have a family or somebody to kill, or else it wouldn't be
fair and square for the others.  Well, nobody could think of anything to
do--everybody was stumped, and set still.  I was most ready to cry; but
all at once I thought of a way, and so I offered them Miss Watson--they
could kill her.  Everybody said:

"Oh, she'll do.  That's all right.  Huck can come in."

Then they all stuck a pin in their fingers to get blood to sign with, and
I made my mark on the paper.

"Now," says Ben Rogers, "what's the line of business of this Gang?"

"Nothing only robbery and murder," Tom said.

"But who are we going to rob?--houses, or cattle, or--"

"Stuff! stealing cattle and such things ain't robbery; it's burglary,"
says Tom Sawyer.  "We ain't burglars.  That ain't no sort of style.  We
are highwaymen.  We stop stages and carriages on the road, with masks on,
and kill the people and take their watches and money."

"Must we always kill the people?"

"Oh, certainly.  It's best.  Some authorities think different, but mostly
it's considered best to kill them--except some that you bring to the cave
here, and keep them till they're ransomed."

"Ransomed?  What's that?"

"I don't know.  But that's what they do.  I've seen it in books; and so
of course that's what we've got to do."

"But how can we do it if we don't know what it is?"

"Why, blame it all, we've GOT to do it.  Don't I tell you it's in the
books?  Do you want to go to doing different from what's in the books,
and get things all muddled up?"

"Oh, that's all very fine to SAY, Tom Sawyer, but how in the nation are
these fellows going to be ransomed if we don't know how to do it to them?
--that's the thing I want to get at.  Now, what do you reckon it is?"

"Well, I don't know.  But per'aps if we keep them till they're ransomed,
it means that we keep them till they're dead."

"Now, that's something LIKE.  That'll answer.  Why couldn't you said that
before?  We'll keep them till they're ransomed to death; and a bothersome
lot they'll be, too--eating up everything, and always trying to get
loose."

"How you talk, Ben Rogers.  How can they get loose when there's a guard
over them, ready to shoot them down if they move a peg?"

"A guard!  Well, that IS good.  So somebody's got to set up all night and
never get any sleep, just so as to watch them.  I think that's
foolishness. Why can't a body take a club and ransom them as soon as they
get here?"

"Because it ain't in the books so--that's why.  Now, Ben Rogers, do you
want to do things regular, or don't you?--that's the idea.  Don't you
reckon that the people that made the books knows what's the correct thing
to do?  Do you reckon YOU can learn 'em anything?  Not by a good deal.
No, sir, we'll just go on and ransom them in the regular way."

"All right.  I don't mind; but I say it's a fool way, anyhow.  Say, do we
kill the women, too?"

"Well, Ben Rogers, if I was as ignorant as you I wouldn't let on.  Kill
the women?  No; nobody ever saw anything in the books like that.  You
fetch them to the cave, and you're always as polite as pie to them; and
by and by they fall in love with you, and never want to go home any
more."

"Well, if that's the way I'm agreed, but I don't take no stock in it.
Mighty soon we'll have the cave so cluttered up with women, and fellows
waiting to be ransomed, that there won't be no place for the robbers.
But go ahead, I ain't got nothing to say."

Little Tommy Barnes was asleep now, and when they waked him up he was
scared, and cried, and said he wanted to go home to his ma, and didn't
want to be a robber any more.

So they all made fun of him, and called him cry-baby, and that made him
mad, and he said he would go straight and tell all the secrets.  But Tom
give him five cents to keep quiet, and said we would all go home and meet
next week, and rob somebody and kill some people.

Ben Rogers said he couldn't get out much, only Sundays, and so he wanted
to begin next Sunday; but all the boys said it would be wicked to do it
on Sunday, and that settled the thing.  They agreed to get together and
fix a day as soon as they could, and then we elected Tom Sawyer first
captain and Jo Harper second captain of the Gang, and so started home.

I clumb up the shed and crept into my window just before day was
breaking. My new clothes was all greased up and clayey, and I was
dog-tired.`,
        },
        {
          title: 'Frankenstein, Letter 1',
          level: 6,
          imageId: '71P8GBG6klL._AC_SL1000__pxlz0v',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `Letter 1

_To Mrs. Saville, England._


St. Petersburgh, Dec. 11th, 17—.


You will rejoice to hear that no disaster has accompanied the
commencement of an enterprise which you have regarded with such evil
forebodings. I arrived here yesterday, and my first task is to assure
my dear sister of my welfare and increasing confidence in the success
of my undertaking.

I am already far north of London, and as I walk in the streets of
Petersburgh, I feel a cold northern breeze play upon my cheeks, which
braces my nerves and fills me with delight. Do you understand this
feeling? This breeze, which has travelled from the regions towards
which I am advancing, gives me a foretaste of those icy climes.
Inspirited by this wind of promise, my daydreams become more fervent
and vivid. I try in vain to be persuaded that the pole is the seat of
frost and desolation; it ever presents itself to my imagination as the
region of beauty and delight. There, Margaret, the sun is for ever
visible, its broad disk just skirting the horizon and diffusing a
perpetual splendour. There—for with your leave, my sister, I will put
some trust in preceding navigators—there snow and frost are banished;
and, sailing over a calm sea, we may be wafted to a land surpassing in
wonders and in beauty every region hitherto discovered on the habitable
globe. Its productions and features may be without example, as the
phenomena of the heavenly bodies undoubtedly are in those undiscovered
solitudes. What may not be expected in a country of eternal light? I
may there discover the wondrous power which attracts the needle and may
regulate a thousand celestial observations that require only this
voyage to render their seeming eccentricities consistent for ever. I
shall satiate my ardent curiosity with the sight of a part of the world
never before visited, and may tread a land never before imprinted by
the foot of man. These are my enticements, and they are sufficient to
conquer all fear of danger or death and to induce me to commence this
laborious voyage with the joy a child feels when he embarks in a little
boat, with his holiday mates, on an expedition of discovery up his
native river. But supposing all these conjectures to be false, you
cannot contest the inestimable benefit which I shall confer on all
mankind, to the last generation, by discovering a passage near the pole
to those countries, to reach which at present so many months are
requisite; or by ascertaining the secret of the magnet, which, if at
all possible, can only be effected by an undertaking such as mine.

These reflections have dispelled the agitation with which I began my
letter, and I feel my heart glow with an enthusiasm which elevates me
to heaven, for nothing contributes so much to tranquillise the mind as
a steady purpose—a point on which the soul may fix its intellectual
eye. This expedition has been the favourite dream of my early years. I
have read with ardour the accounts of the various voyages which have
been made in the prospect of arriving at the North Pacific Ocean
through the seas which surround the pole. You may remember that a
history of all the voyages made for purposes of discovery composed the
whole of our good Uncle Thomas’ library. My education was neglected,
yet I was passionately fond of reading. These volumes were my study
day and night, and my familiarity with them increased that regret which
I had felt, as a child, on learning that my father’s dying injunction
had forbidden my uncle to allow me to embark in a seafaring life.

These visions faded when I perused, for the first time, those poets
whose effusions entranced my soul and lifted it to heaven. I also
became a poet and for one year lived in a paradise of my own creation;
I imagined that I also might obtain a niche in the temple where the
names of Homer and Shakespeare are consecrated. You are well
acquainted with my failure and how heavily I bore the disappointment.
But just at that time I inherited the fortune of my cousin, and my
thoughts were turned into the channel of their earlier bent.

Six years have passed since I resolved on my present undertaking. I
can, even now, remember the hour from which I dedicated myself to this
great enterprise. I commenced by inuring my body to hardship. I
accompanied the whale-fishers on several expeditions to the North Sea;
I voluntarily endured cold, famine, thirst, and want of sleep; I often
worked harder than the common sailors during the day and devoted my
nights to the study of mathematics, the theory of medicine, and those
branches of physical science from which a naval adventurer might derive
the greatest practical advantage. Twice I actually hired myself as an
under-mate in a Greenland whaler, and acquitted myself to admiration. I
must own I felt a little proud when my captain offered me the second
dignity in the vessel and entreated me to remain with the greatest
earnestness, so valuable did he consider my services.

And now, dear Margaret, do I not deserve to accomplish some great purpose?
My life might have been passed in ease and luxury, but I preferred glory to
every enticement that wealth placed in my path. Oh, that some encouraging
voice would answer in the affirmative! My courage and my resolution is
firm; but my hopes fluctuate, and my spirits are often depressed. I am
about to proceed on a long and difficult voyage, the emergencies of which
will demand all my fortitude: I am required not only to raise the spirits
of others, but sometimes to sustain my own, when theirs are failing.

This is the most favourable period for travelling in Russia. They fly
quickly over the snow in their sledges; the motion is pleasant, and, in
my opinion, far more agreeable than that of an English stagecoach. The
cold is not excessive, if you are wrapped in furs—a dress which I have
already adopted, for there is a great difference between walking the
deck and remaining seated motionless for hours, when no exercise
prevents the blood from actually freezing in your veins. I have no
ambition to lose my life on the post-road between St. Petersburgh and
Archangel.

I shall depart for the latter town in a fortnight or three weeks; and my
intention is to hire a ship there, which can easily be done by paying the
insurance for the owner, and to engage as many sailors as I think necessary
among those who are accustomed to the whale-fishing. I do not intend to
sail until the month of June; and when shall I return? Ah, dear sister, how
can I answer this question? If I succeed, many, many months, perhaps years,
will pass before you and I may meet. If I fail, you will see me again soon,
or never.

Farewell, my dear, excellent Margaret. Heaven shower down blessings on you,
and save me, that I may again and again testify my gratitude for all your
love and kindness.

Your affectionate brother,

R. Walton`,
        },
        {
          title: 'Frankenstein, Letter 2',
          level: 6,
          imageId: '71P8GBG6klL._AC_SL1000__pxlz0v',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `_To Mrs. Saville, England._

Archangel, 28th March, 17—.


How slowly the time passes here, encompassed as I am by frost and snow!
Yet a second step is taken towards my enterprise. I have hired a
vessel and am occupied in collecting my sailors; those whom I have
already engaged appear to be men on whom I can depend and are certainly
possessed of dauntless courage.

But I have one want which I have never yet been able to satisfy, and the
absence of the object of which I now feel as a most severe evil, I have no
friend, Margaret: when I am glowing with the enthusiasm of success, there
will be none to participate my joy; if I am assailed by disappointment, no
one will endeavour to sustain me in dejection. I shall commit my thoughts
to paper, it is true; but that is a poor medium for the communication of
feeling. I desire the company of a man who could sympathise with me, whose
eyes would reply to mine. You may deem me romantic, my dear sister, but I
bitterly feel the want of a friend. I have no one near me, gentle yet
courageous, possessed of a cultivated as well as of a capacious mind, whose
tastes are like my own, to approve or amend my plans. How would such a
friend repair the faults of your poor brother! I am too ardent in execution
and too impatient of difficulties. But it is a still greater evil to me
that I am self-educated: for the first fourteen years of my life I ran wild
on a common and read nothing but our Uncle Thomas’ books of voyages.
At that age I became acquainted with the celebrated poets of our own
country; but it was only when it had ceased to be in my power to derive its
most important benefits from such a conviction that I perceived the
necessity of becoming acquainted with more languages than that of my native
country. Now I am twenty-eight and am in reality more illiterate than many
schoolboys of fifteen. It is true that I have thought more and that my
daydreams are more extended and magnificent, but they want (as the painters
call it) _keeping;_ and I greatly need a friend who would have sense
enough not to despise me as romantic, and affection enough for me to
endeavour to regulate my mind.

Well, these are useless complaints; I shall certainly find no friend on the
wide ocean, nor even here in Archangel, among merchants and seamen. Yet
some feelings, unallied to the dross of human nature, beat even in these
rugged bosoms. My lieutenant, for instance, is a man of wonderful courage
and enterprise; he is madly desirous of glory, or rather, to word my phrase
more characteristically, of advancement in his profession. He is an
Englishman, and in the midst of national and professional prejudices,
unsoftened by cultivation, retains some of the noblest endowments of
humanity. I first became acquainted with him on board a whale vessel;
finding that he was unemployed in this city, I easily engaged him to assist
in my enterprise.

The master is a person of an excellent disposition and is remarkable in the
ship for his gentleness and the mildness of his discipline. This
circumstance, added to his well-known integrity and dauntless courage, made
me very desirous to engage him. A youth passed in solitude, my best years
spent under your gentle and feminine fosterage, has so refined the
groundwork of my character that I cannot overcome an intense distaste to
the usual brutality exercised on board ship: I have never believed it to be
necessary, and when I heard of a mariner equally noted for his kindliness
of heart and the respect and obedience paid to him by his crew, I felt
myself peculiarly fortunate in being able to secure his services. I heard
of him first in rather a romantic manner, from a lady who owes to him the
happiness of her life. This, briefly, is his story. Some years ago he loved
a young Russian lady of moderate fortune, and having amassed a considerable
sum in prize-money, the father of the girl consented to the match. He saw
his mistress once before the destined ceremony; but she was bathed in
tears, and throwing herself at his feet, entreated him to spare her,
confessing at the same time that she loved another, but that he was poor,
and that her father would never consent to the union. My generous friend
reassured the suppliant, and on being informed of the name of her lover,
instantly abandoned his pursuit. He had already bought a farm with his
money, on which he had designed to pass the remainder of his life; but he
bestowed the whole on his rival, together with the remains of his
prize-money to purchase stock, and then himself solicited the young
woman’s father to consent to her marriage with her lover. But the old
man decidedly refused, thinking himself bound in honour to my friend, who,
when he found the father inexorable, quitted his country, nor returned
until he heard that his former mistress was married according to her
inclinations. “What a noble fellow!” you will exclaim. He is
so; but then he is wholly uneducated: he is as silent as a Turk, and a kind
of ignorant carelessness attends him, which, while it renders his conduct
the more astonishing, detracts from the interest and sympathy which
otherwise he would command.

Yet do not suppose, because I complain a little or because I can
conceive a consolation for my toils which I may never know, that I am
wavering in my resolutions. Those are as fixed as fate, and my voyage
is only now delayed until the weather shall permit my embarkation. The
winter has been dreadfully severe, but the spring promises well, and it
is considered as a remarkably early season, so that perhaps I may sail
sooner than I expected. I shall do nothing rashly: you know me
sufficiently to confide in my prudence and considerateness whenever the
safety of others is committed to my care.

I cannot describe to you my sensations on the near prospect of my
undertaking. It is impossible to communicate to you a conception of
the trembling sensation, half pleasurable and half fearful, with which
I am preparing to depart. I am going to unexplored regions, to “the
land of mist and snow,” but I shall kill no albatross; therefore do not
be alarmed for my safety or if I should come back to you as worn and
woeful as the “Ancient Mariner.” You will smile at my allusion, but I
will disclose a secret. I have often attributed my attachment to, my
passionate enthusiasm for, the dangerous mysteries of ocean to that
production of the most imaginative of modern poets. There is something
at work in my soul which I do not understand. I am practically
industrious—painstaking, a workman to execute with perseverance and
labour—but besides this there is a love for the marvellous, a belief
in the marvellous, intertwined in all my projects, which hurries me out
of the common pathways of men, even to the wild sea and unvisited
regions I am about to explore.

But to return to dearer considerations. Shall I meet you again, after
having traversed immense seas, and returned by the most southern cape of
Africa or America? I dare not expect such success, yet I cannot bear to
look on the reverse of the picture. Continue for the present to write to
me by every opportunity: I may receive your letters on some occasions when
I need them most to support my spirits. I love you very tenderly.
Remember me with affection, should you never hear from me again.

Your affectionate brother,
 Robert Walton`,
        },
        {
          title: 'Pride and Prejudice, Chapter 1',
          level: 6,
          imageId:
            'Pride-and-Prejudice-Paperback-9780553213102_2c1d268d-f1ec-4dab-832a-044d98c5e551.98d8d6e1c063763e73c3a69c85607b21_uc6yzw',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `It is a truth universally acknowledged, that a single man in possession
of a good fortune must be in want of a wife.

However little known the feelings or views of such a man may be on his
first entering a neighbourhood, this truth is so well fixed in the minds
of the surrounding families, that he is considered as the rightful
property of some one or other of their daughters.

“My dear Mr. Bennet,” said his lady to him one day, “have you heard that
Netherfield Park is let at last?”

Mr. Bennet replied that he had not.

“But it is,” returned she; “for Mrs. Long has just been here, and she
told me all about it.”

Mr. Bennet made no answer.

“Do not you want to know who has taken it?” cried his wife, impatiently.

“_You_ want to tell me, and I have no objection to hearing it.”

This was invitation enough.

“Why, my dear, you must know, Mrs. Long says that Netherfield is taken
by a young man of large fortune from the north of England; that he came
down on Monday in a chaise and four to see the place, and was so much
delighted with it that he agreed with Mr. Morris immediately; that he is
to take possession before Michaelmas, and some of his servants are to be
in the house by the end of next week.”

“What is his name?”

“Bingley.”

“Is he married or single?”

“Oh, single, my dear, to be sure! A single man of large fortune; four or
five thousand a year. What a fine thing for our girls!”

“How so? how can it affect them?”

“My dear Mr. Bennet,” replied his wife, “how can you be so tiresome? You
must know that I am thinking of his marrying one of them.”

“Is that his design in settling here?”

“Design? Nonsense, how can you talk so! But it is very likely that he
_may_ fall in love with one of them, and therefore you must visit him as
soon as he comes.”

“I see no occasion for that. You and the girls may go--or you may send
them by themselves, which perhaps will be still better; for as you are
as handsome as any of them, Mr. Bingley might like you the best of the
party.”

“My dear, you flatter me. I certainly _have_ had my share of beauty, but
I do not pretend to be anything extraordinary now. When a woman has five
grown-up daughters, she ought to give over thinking of her own beauty.”

“In such cases, a woman has not often much beauty to think of.”

“But, my dear, you must indeed go and see Mr. Bingley when he comes into
the neighbourhood.”

“It is more than I engage for, I assure you.”

“But consider your daughters. Only think what an establishment it would
be for one of them. Sir William and Lady Lucas are determined to go,
merely on that account; for in general, you know, they visit no new
comers. Indeed you must go, for it will be impossible for _us_ to visit
him, if you do not.”

“You are over scrupulous, surely. I dare say Mr. Bingley will be very
glad to see you; and I will send a few lines by you to assure him of my
hearty consent to his marrying whichever he chooses of the girls--though
I must throw in a good word for my little Lizzy.”

“I desire you will do no such thing. Lizzy is not a bit better than the
others: and I am sure she is not half so handsome as Jane, nor half so
good-humoured as Lydia. But you are always giving _her_ the preference.”

“They have none of them much to recommend them,” replied he: “they are
all silly and ignorant like other girls; but Lizzy has something more of
quickness than her sisters.”

“Mr. Bennet, how can you abuse your own children in such a way? You take
delight in vexing me. You have no compassion on my poor nerves.”

“You mistake me, my dear. I have a high respect for your nerves. They
are my old friends. I have heard you mention them with consideration
these twenty years at least.”

“Ah, you do not know what I suffer.”

“But I hope you will get over it, and live to see many young men of four
thousand a year come into the neighbourhood.”

“It will be no use to us, if twenty such should come, since you will not
visit them.”

“Depend upon it, my dear, that when there are twenty, I will visit them
all.”

Mr. Bennet was so odd a mixture of quick parts, sarcastic humour,
reserve, and caprice, that the experience of three-and-twenty years had
been insufficient to make his wife understand his character. _Her_ mind
was less difficult to develope. She was a woman of mean understanding,
little information, and uncertain temper. When she was discontented, she
fancied herself nervous. The business of her life was to get her
daughters married: its solace was visiting and news.`,
        },
        {
          title: 'Pride and Prejudice, Chapter 2',
          level: 6,
          imageId:
            'Pride-and-Prejudice-Paperback-9780553213102_2c1d268d-f1ec-4dab-832a-044d98c5e551.98d8d6e1c063763e73c3a69c85607b21_uc6yzw',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He
had always intended to visit him, though to the last always assuring his
wife that he should not go; and till the evening after the visit was
paid she had no knowledge of it. It was then disclosed in the following
manner. Observing his second daughter employed in trimming a hat, he
suddenly addressed her with,--

“I hope Mr. Bingley will like it, Lizzy.”

“We are not in a way to know _what_ Mr. Bingley likes,” said her mother,
resentfully, “since we are not to visit.”

“But you forget, mamma,” said Elizabeth, “that we shall meet him at the
assemblies, and that Mrs. Long has promised to introduce him.”

“I do not believe Mrs. Long will do any such thing. She has two nieces
of her own. She is a selfish, hypocritical woman, and I have no opinion
of her.”

“No more have I,” said Mr. Bennet; “and I am glad to find that you do
not depend on her serving you.”

Mrs. Bennet deigned not to make any reply; but, unable to contain
herself, began scolding one of her daughters.

“Don’t keep coughing so, Kitty, for heaven’s sake! Have a little
compassion on my nerves. You tear them to pieces.”

“Kitty has no discretion in her coughs,” said her father; “she times
them ill.”

“I do not cough for my own amusement,” replied Kitty, fretfully. “When
is your next ball to be, Lizzy?”

“To-morrow fortnight.”

“Ay, so it is,” cried her mother, “and Mrs. Long does not come back till
the day before; so, it will be impossible for her to introduce him, for
she will not know him herself.”

“Then, my dear, you may have the advantage of your friend, and introduce
Mr. Bingley to _her_.”

“Impossible, Mr. Bennet, impossible, when I am not acquainted with him
myself; how can you be so teasing?”

“I honour your circumspection. A fortnight’s acquaintance is certainly
very little. One cannot know what a man really is by the end of a
fortnight. But if _we_ do not venture, somebody else will; and after
all, Mrs. Long and her nieces must stand their chance; and, therefore,
as she will think it an act of kindness, if you decline the office, I
will take it on myself.”

The girls stared at their father. Mrs. Bennet said only, “Nonsense,
nonsense!”

“What can be the meaning of that emphatic exclamation?” cried he. “Do
you consider the forms of introduction, and the stress that is laid on
them, as nonsense? I cannot quite agree with you _there_. What say you,
Mary? For you are a young lady of deep reflection, I know, and read
great books, and make extracts.”

Mary wished to say something very sensible, but knew not how.

“While Mary is adjusting her ideas,” he continued, “let us return to Mr.
Bingley.”

“I am sick of Mr. Bingley,” cried his wife.

“I am sorry to hear _that_; but why did you not tell me so before? If I
had known as much this morning, I certainly would not have called on
him. It is very unlucky; but as I have actually paid the visit, we
cannot escape the acquaintance now.”

The astonishment of the ladies was just what he wished--that of Mrs.
Bennet perhaps surpassing the rest; though when the first tumult of joy
was over, she began to declare that it was what she had expected all the
while.

“How good it was in you, my dear Mr. Bennet! But I knew I should
persuade you at last. I was sure you loved your girls too well to
neglect such an acquaintance. Well, how pleased I am! And it is such a
good joke, too, that you should have gone this morning, and never said a
word about it till now.”

“Now, Kitty, you may cough as much as you choose,” said Mr. Bennet; and,
as he spoke, he left the room, fatigued with the raptures of his wife.

“What an excellent father you have, girls,” said she, when the door was
shut. “I do not know how you will ever make him amends for his kindness;
or me either, for that matter. At our time of life, it is not so
pleasant, I can tell you, to be making new acquaintances every day; but
for your sakes we would do anything. Lydia, my love, though you _are_
the youngest, I dare say Mr. Bingley will dance with you at the next
ball.”

“Oh,” said Lydia, stoutly, “I am not afraid; for though I _am_ the
youngest, I’m the tallest.”

The rest of the evening was spent in conjecturing how soon he would
return Mr. Bennet’s visit, and determining when they should ask him to
dinner.`,
        },
        {
          title: 'Pride and Prejudice, Chapter 3',
          level: 6,
          imageId:
            'Pride-and-Prejudice-Paperback-9780553213102_2c1d268d-f1ec-4dab-832a-044d98c5e551.98d8d6e1c063763e73c3a69c85607b21_uc6yzw',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `Not all that Mrs. Bennet, however, with the assistance of her five
daughters, could ask on the subject, was sufficient to draw from her
husband any satisfactory description of Mr. Bingley. They attacked him
in various ways, with barefaced questions, ingenious suppositions, and
distant surmises; but he eluded the skill of them all; and they were at
last obliged to accept the second-hand intelligence of their neighbour,
Lady Lucas. Her report was highly favourable. Sir William had been
delighted with him. He was quite young, wonderfully handsome, extremely
agreeable, and, to crown the whole, he meant to be at the next assembly
with a large party. Nothing could be more delightful! To be fond of
dancing was a certain step towards falling in love; and very lively
hopes of Mr. Bingley’s heart were entertained.

“If I can but see one of my daughters happily settled at Netherfield,”
said Mrs. Bennet to her husband, “and all the others equally well
married, I shall have nothing to wish for.”

In a few days Mr. Bingley returned Mr. Bennet’s visit, and sat about ten
minutes with him in his library. He had entertained hopes of being
admitted to a sight of the young ladies, of whose beauty he had heard
much; but he saw only the father. The ladies were somewhat more
fortunate, for they had the advantage of ascertaining, from an upper
window, that he wore a blue coat and rode a black horse.

An invitation to dinner was soon afterwards despatched; and already had
Mrs. Bennet planned the courses that were to do credit to her
housekeeping, when an answer arrived which deferred it all. Mr. Bingley
was obliged to be in town the following day, and consequently unable to
accept the honour of their invitation, etc. Mrs. Bennet was quite
disconcerted. She could not imagine what business he could have in town
so soon after his arrival in Hertfordshire; and she began to fear that
he might always be flying about from one place to another, and never
settled at Netherfield as he ought to be. Lady Lucas quieted her fears a
little by starting the idea of his

being gone to London only to get a large party for the ball; and a
report soon followed that Mr. Bingley was to bring twelve ladies and
seven gentlemen with him to the assembly. The girls grieved over such a
number of ladies; but were comforted the day before the ball by hearing
that, instead of twelve, he had brought only six with him from London,
his five sisters and a cousin. And when the party entered the
assembly-room, it consisted of only five altogether: Mr. Bingley, his
two sisters, the husband of the eldest, and another young man.

Mr. Bingley was good-looking and gentlemanlike: he had a pleasant
countenance, and easy, unaffected manners. His sisters were fine women,
with an air of decided fashion. His brother-in-law, Mr. Hurst, merely
looked the gentleman; but his friend Mr. Darcy soon drew the attention
of the room by his fine, tall person, handsome features, noble mien, and
the report, which was in general circulation within five minutes after
his entrance, of his having ten thousand a year. The gentlemen
pronounced him to be a fine figure of a man, the ladies declared he was
much handsomer than Mr. Bingley, and he was looked at with great
admiration for about half the evening, till his manners gave a disgust
which turned the tide of his popularity; for he was discovered to be
proud, to be above his company, and above being pleased; and not all his
large estate in Derbyshire could save him from having a most forbidding,
disagreeable countenance, and being unworthy to be compared with his
friend.

Mr. Bingley had soon made himself acquainted with all the principal
people in the room: he was lively and unreserved, danced every dance,
was angry that the ball closed so early, and talked of giving one
himself at Netherfield. Such amiable qualities must speak for
themselves. What a contrast between him and his friend! Mr. Darcy danced
only once with Mrs. Hurst and once with Miss Bingley, declined being
introduced to any other lady, and spent the rest of the evening in
walking about the room, speaking occasionally to one of his own party.
His character was decided. He was the proudest, most disagreeable man in
the world, and everybody hoped that he would never come there again.
Amongst the most violent against him was Mrs. Bennet, whose dislike of
his general behaviour was sharpened into particular resentment by his
having slighted one of her daughters.

Elizabeth Bennet had been obliged, by the scarcity of gentlemen, to sit
down for two dances; and during part of that time, Mr. Darcy had been
standing near enough for her to overhear a conversation between him and
Mr. Bingley, who came from the dance for a few minutes to press his
friend to join it.

“Come, Darcy,” said he, “I must have you dance. I hate to see you
standing about by yourself in this stupid manner. You had much better
dance.”

“I certainly shall not. You know how I detest it, unless I am
particularly acquainted with my partner. At such an assembly as this, it
would be insupportable. Your sisters are engaged, and there is not
another woman in the room whom it would not be a punishment to me to
stand up with.”

“I would not be so fastidious as you are,” cried Bingley, “for a
kingdom! Upon my honour, I never met with so many pleasant girls in my
life as I have this evening; and there are several of them, you see,
uncommonly pretty.”

“_You_ are dancing with the only handsome girl in the room,” said Mr.
Darcy, looking at the eldest Miss Bennet.

“Oh, she is the most beautiful creature I ever beheld! But there is one
of her sisters sitting down just behind you, who is very pretty, and I
dare say very agreeable. Do let me ask my partner to introduce you.”

“Which do you mean?” and turning round, he looked for a moment at
Elizabeth, till, catching her eye, he withdrew his own, and coldly said,
“She is tolerable: but not handsome enough to tempt _me_; and I am in no
humour at present to give consequence to young ladies who are slighted
by other men. You had better return to your partner and enjoy her
smiles, for you are wasting your time with me.”

Mr. Bingley followed his advice. Mr. Darcy walked off; and Elizabeth
remained with no very cordial feelings towards him. She told the story,
however, with great spirit among her friends; for she had a lively,
playful disposition, which delighted in anything ridiculous.

The evening altogether passed off pleasantly to the whole family. Mrs.
Bennet had seen her eldest daughter much admired by the Netherfield
party. Mr. Bingley had danced with her twice, and she had been
distinguished by his sisters. Jane was as much gratified by this as her
mother could be, though in a quieter way. Elizabeth felt Jane’s
pleasure. Mary had heard herself mentioned to Miss Bingley as the most
accomplished girl in the neighbourhood; and Catherine and Lydia had been
fortunate enough to be never without partners, which was all that they
had yet learnt to care for at a ball. They returned, therefore, in good
spirits to Longbourn, the village where they lived, and of which they
were the principal inhabitants. They found Mr. Bennet still up. With a
book, he was regardless of time; and on the present occasion he had a
good deal of curiosity as to the event of an evening which had raised
such splendid expectations. He had rather hoped that all his wife’s
views on the stranger would be disappointed; but he soon found that he
had a very different story to hear.

“Oh, my dear Mr. Bennet,” as she entered the room, “we have had a most
delightful evening, a most excellent ball. I wish you had been there.
Jane was so admired, nothing could be like it. Everybody said how well
she looked; and Mr. Bingley thought her quite beautiful, and danced with
her twice. Only think of _that_, my dear: he actually danced with her
twice; and she was the only creature in the room that he asked a second
time. First of all, he asked Miss Lucas. I was so vexed to see him stand
up with her; but, however, he did not admire her at all; indeed, nobody
can, you know; and he seemed quite struck with Jane as she was going
down the dance. So he inquired who she was, and got introduced, and
asked her for the two next. Then, the two third he danced with Miss
King, and the two fourth with Maria Lucas, and the two fifth with Jane
again, and the two sixth with Lizzy, and the _Boulanger_----”

“If he had had any compassion for _me_,” cried her husband impatiently,
“he would not have danced half so much! For God’s sake, say no more of
his partners. O that he had sprained his ancle in the first dance!”

“Oh, my dear,” continued Mrs. Bennet, “I am quite delighted with him. He
is so excessively handsome! and his sisters are charming women. I never
in my life saw anything more elegant than their dresses. I dare say the
lace upon Mrs. Hurst’s gown----”

Here she was interrupted again. Mr. Bennet protested against any
description of finery. She was therefore obliged to seek another branch
of the subject, and related, with much bitterness of spirit, and some
exaggeration, the shocking rudeness of Mr. Darcy.

“But I can assure you,” she added, “that Lizzy does not lose much by not
suiting _his_ fancy; for he is a most disagreeable, horrid man, not at
all worth pleasing. So high and so conceited, that there was no enduring
him! He walked here, and he walked there, fancying himself so very
great! Not handsome enough to dance with! I wish you had been there, my
dear, to have given him one of your set-downs. I quite detest the man.”
`,
        },
        {
          title: 'Winnie the Pooh, Chapter 1',
          level: 5,
          imageId: 'pg67098.cover.medium_gkl42o',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `IN WHICH WE ARE INTRODUCED TO
WINNIE-THE-POOH AND SOME BEES,
AND THE STORIES BEGIN


Here is Edward Bear, coming downstairs now, bump, bump, bump, on the
back of his head, behind Christopher Robin. It is, as far as he knows,
the only way of coming downstairs, but sometimes he feels that there
really is another way, if only he could stop bumping for a moment and
think of it. And then he feels that perhaps there isn't. Anyhow, here he
is at the bottom, and ready to be introduced to you. Winnie-the-Pooh.

When I first heard his name, I said, just as you are going to say, "But
I thought he was a boy?"

"So did I," said Christopher Robin.

"Then you can't call him Winnie?"

"I don't."

"But you said----"

"He's Winnie-ther-Pooh. Don't you know what '_ther_' means?"

"Ah, yes, now I do," I said quickly; and I hope you do too, because it
is all the explanation you are going to get.

Sometimes Winnie-the-Pooh likes a game of some sort when he comes
downstairs, and sometimes he likes to sit quietly in front of the fire
and listen to a story. This evening----

"What about a story?" said Christopher Robin.

"_What_ about a story?" I said.

"Could you very sweetly tell Winnie-the-Pooh one?"

"I suppose I could," I said. "What sort of stories does he like?"

"About himself. Because he's _that_ sort of Bear."

"Oh, I see."

"So could you very sweetly?"

"I'll try," I said.

So I tried.

                 *        *        *        *        *

Once upon a time, a very long time ago now, about last Friday,
Winnie-the-Pooh lived in a forest all by himself under the name of
Sanders.

(_"What does 'under the name' mean?" asked Christopher Robin._

"_It means he had the name over the door in gold letters, and lived
under it._"

_"Winnie-the-Pooh wasn't quite sure," said Christopher Robin._

_"Now I am," said a growly voice._

_"Then I will go on," said I._)

One day when he was out walking, he came to an open place in the middle
of the forest, and in the middle of this place was a large oak-tree,
and, from the top of the tree, there came a loud buzzing-noise.

Winnie-the-Pooh sat down at the foot of the tree, put his head between
his paws and began to think.

First of all he said to himself: "That buzzing-noise means something.
You don't get a buzzing-noise like that, just buzzing and buzzing,
without its meaning something. If there's a buzzing-noise, somebody's
making a buzzing-noise, and the only reason for making a buzzing-noise
that _I_ know of is because you're a bee."

Then he thought another long time, and said: "And the only reason for
being a bee that I know of is making honey."

And then he got up, and said: "And the only reason for making honey is
so as _I_ can eat it." So he began to climb the tree.

He climbed and he climbed and he climbed, and as he climbed he sang a
little song to himself. It went like this:

    Isn't it funny
    How a bear likes honey?
    Buzz! Buzz! Buzz!
    I wonder why he does?

Then he climbed a little further ... and a little further ... and
then just a little further. By that time he had thought of another song.

    It's a very funny thought that, if Bears were Bees,
    They'd build their nests at the _bottom_ of trees.
    And that being so (if the Bees were Bears),
    We shouldn't have to climb up all these stairs.

He was getting rather tired by this time, so that is why he sang a
Complaining Song. He was nearly there now, and if he just stood on that
branch ...

_Crack!_

"Oh, help!" said Pooh, as he dropped ten feet on the branch below him.

"If only I hadn't----" he said, as he bounced twenty feet on to the next
branch.

"You see, what I _meant_ to do," he explained, as he turned
head-over-heels, and crashed on to another branch thirty feet below,
"what I _meant_ to do----"

"Of course, it _was_ rather----" he admitted, as he slithered very
quickly through the next six branches.

"It all comes, I suppose," he decided, as he said good-bye to the last
branch, spun round three times, and flew gracefully into a gorse-bush,
"it all comes of _liking_ honey so much. Oh, help!"

He crawled out of the gorse-bush, brushed the prickles from his nose,
and began to think again. And the first person he thought of was
Christopher Robin.

(_"Was that me?" said Christopher Robin in an awed voice, hardly daring
to believe it._

"_That was you._"

_Christopher Robin said nothing, but his eyes got larger and larger, and
his face got pinker and pinker._)

So Winnie-the-Pooh went round to his friend Christopher Robin, who lived
behind a green door in another part of the forest.

"Good morning, Christopher Robin," he said.

"Good morning, Winnie-_ther_-Pooh," said you.

"I wonder if you've got such a thing as a balloon about you?"

"A balloon?"

"Yes, I just said to myself coming along: 'I wonder if Christopher Robin
has such a thing as a balloon about him?' I just said it to myself,
thinking of balloons, and wondering."

"What do you want a balloon for?" you said.

Winnie-the-Pooh looked round to see that nobody was listening, put his
paw to his mouth, and said in a deep whisper: "_Honey!_"

"But you don't get honey with balloons!"

"_I_ do," said Pooh.

Well, it just happened that you had been to a party the day before at
the house of your friend Piglet, and you had balloons at the party. You
had had a big green balloon; and one of Rabbit's relations had had a big
blue one, and had left it behind, being really too young to go to a
party at all; and so you had brought the green one _and_ the blue one
home with you.

"Which one would you like?" you asked Pooh.

He put his head between his paws and thought very carefully.

"It's like this," he said. "When you go after honey with a balloon, the
great thing is not to let the bees know you're coming. Now, if you have
a green balloon, they might think you were only part of the tree, and
not notice you, and, if you have a blue balloon, they might think you
were only part of the sky, and not notice you, and the question is:
Which is most likely?"

"Wouldn't they notice _you_ underneath the balloon?" you asked.

"They might or they might not," said Winnie-the-Pooh. "You never can
tell with bees." He thought for a moment and said: "I shall try to look
like a small black cloud. That will deceive them."

"Then you had better have the blue balloon," you said; and so it was
decided.

Well, you both went out with the blue balloon, and you took your gun
with you, just in case, as you always did, and Winnie-the-Pooh went to a
very muddy place that he knew of, and rolled and rolled until he was
black all over; and then, when the balloon was blown up as big as big,
and you and Pooh were both holding on to the string, you let go
suddenly, and Pooh Bear floated gracefully up into the sky, and stayed
there--level with the top of the tree and about twenty feet away from
it.

"Hooray!" you shouted.

"Isn't that fine?" shouted Winnie-the-Pooh down to you. "What do I look
like?"

"You look like a Bear holding on to a balloon," you said.

"Not," said Pooh anxiously, "--not like a small black cloud in a blue
sky?"

"Not very much."

"Ah, well, perhaps from up here it looks different. And, as I say, you
never can tell with bees."

There was no wind to blow him nearer to the tree, so there he stayed. He
could see the honey, he could smell the honey, but he couldn't quite
reach the honey.

After a little while he called down to you.

"Christopher Robin!" he said in a loud whisper.

"Hallo!"

"I think the bees _suspect_ something!"

"What sort of thing?"

"I don't know. But something tells me that they're _suspicious_!"

"Perhaps they think that you're after their honey."

"It may be that. You never can tell with bees."

There was another little silence, and then he called down to you again.

"Christopher Robin!"

"Yes?"

"Have you an umbrella in your house?"

"I think so."

"I wish you would bring it out here, and walk up and down with it, and
look up at me every now and then, and say 'Tut-tut, it looks like rain.'
I think, if you did that, it would help the deception which we are
practising on these bees."

Well, you laughed to yourself, "Silly old Bear!" but you didn't say it
aloud because you were so fond of him, and you went home for your
umbrella.

"Oh, there you are!" called down Winnie-the-Pooh, as soon as you got
back to the tree. "I was beginning to get anxious. I have discovered
that the bees are now definitely Suspicious."

"Shall I put my umbrella up?" you said.

"Yes, but wait a moment. We must be practical. The important bee to
deceive is the Queen Bee. Can you see which is the Queen Bee from down
there?"

"No."

"A pity. Well, now, if you walk up and down with your umbrella, saying,
'Tut-tut, it looks like rain,' I shall do what I can by singing a little
Cloud Song, such as a cloud might sing.... Go!"

So, while you walked up and down and wondered if it would rain,
Winnie-the-Pooh sang this song:

    How sweet to be a Cloud
      Floating in the Blue!
    Every little cloud
    _Always_ sings aloud.

    "How sweet to be a Cloud
      Floating in the Blue!"
    It makes him very proud
    To be a little cloud.

The bees were still buzzing as suspiciously as ever. Some of them,
indeed, left their nests and flew all round the cloud as it began the
second verse of this song, and one bee sat down on the nose of the cloud
for a moment, and then got up again.

"Christopher--_ow!_--Robin," called out the cloud.

"Yes?"

"I have just been thinking, and I have come to a very important
decision. _These are the wrong sort of bees._"

"Are they?"

"Quite the wrong sort. So I should think they would make the wrong sort
of honey, shouldn't you?"

"Would they?"

"Yes. So I think I shall come down."

"How?" asked you.

Winnie-the-Pooh hadn't thought about this. If he let go of the string,
he would fall--_bump_--and he didn't like the idea of that. So he
thought for a long time, and then he said:

"Christopher Robin, you must shoot the balloon with your gun. Have you
got your gun?"

"Of course I have," you said. "But if I do that, it will spoil the
balloon," you said.

"But if you _don't_," said Pooh, "I shall have to let go, and that would
spoil _me_."

When he put it like this, you saw how it was, and you aimed very
carefully at the balloon, and fired.

"_Ow!_" said Pooh.

"Did I miss?" you asked.

"You didn't exactly _miss_," said Pooh, "but you missed the _balloon_."

"I'm so sorry," you said, and you fired again, and this time you hit the
balloon, and the air came slowly out, and Winnie-the-Pooh floated down
to the ground.

But his arms were so stiff from holding on to the string of the balloon
all that time that they stayed up straight in the air for more than a
week, and whenever a fly came and settled on his nose he had to blow it
off. And I think--but I am not sure--that _that_ is why he was always
called Pooh.

                 *        *        *        *        *

"Is that the end of the story?" asked Christopher Robin.

"That's the end of that one. There are others."

"About Pooh and Me?"

"And Piglet and Rabbit and all of you. Don't you remember?"

"I do remember, and then when I try to remember, I forget."

"That day when Pooh and Piglet tried to catch the Heffalump----"

"They didn't catch it, did they?"

"No."

"Pooh couldn't, because he hasn't any brain. Did _I_ catch it?"

"Well, that comes into the story."

Christopher Robin nodded.

"I do remember," he said, "only Pooh doesn't very well, so that's why he
likes having it told to him again. Because then it's a real story and
not just a remembering."

"That's just how _I_ feel," I said.

Christopher Robin gave a deep sigh, picked his Bear up by the leg, and
walked off to the door, trailing Pooh behind him. At the door he turned
and said, "Coming to see me have my bath?"

"I might," I said.

"I didn't hurt him when I shot him, did I?"

"Not a bit."

He nodded and went out, and in a moment I heard Winnie-the-Pooh--_bump,
bump, bump_--going up the stairs behind him.`,
        },
        {
          title: 'Winnie the Pooh, Chapter 2',
          level: 5,
          imageId: 'pg67098.cover.medium_gkl42o',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `IN WHICH POOH GOES VISITING AND
GETS INTO A TIGHT PLACE


Edward Bear, known to his friends as Winnie-the-Pooh, or Pooh for
short, was walking through the forest one day, humming proudly to
himself. He had made up a little hum that very morning, as he was doing
his Stoutness Exercises in front of the glass: _Tra-la-la, tra-la-la_,
as he stretched up as high as he could go, and then _Tra-la-la,
tra-la--oh, help!--la_, as he tried to reach his toes. After breakfast
he had said it over and over to himself until he had learnt it off by
heart, and now he was humming it right through, properly. It went like
this:

      _Tra-la-la, tra-la-la,_
      _Tra-la-la, tra-la-la,_
    _Rum-tum-tiddle-um-tum._
      _Tiddle-iddle, tiddle-iddle,_
      _Tiddle-iddle, tiddle-iddle,_
    _Rum-tum-tum-tiddle-um._

Well, he was humming this hum to himself, and walking along gaily,
wondering what everybody else was doing, and what it felt like, being
somebody else, when suddenly he came to a sandy bank, and in the bank
was a large hole.

"Aha!" said Pooh. (_Rum-tum-tiddle-um-tum._) "If I know anything about
anything, that hole means Rabbit," he said, "and Rabbit means Company,"
he said, "and Company means Food and Listening-to-Me-Humming and such
like. _Rum-tum-tum-tiddle-um._"

So he bent down, put his head into the hole, and called out:

"Is anybody at home?"

There was a sudden scuffling noise from inside the hole, and then
silence.

"What I said was, 'Is anybody at home?'" called out Pooh very loudly.

"No!" said a voice; and then added, "You needn't shout so loud. I heard
you quite well the first time."

"Bother!" said Pooh. "Isn't there anybody here at all?"

"Nobody."

Winnie-the-Pooh took his head out of the hole, and thought for a little,
and he thought to himself, "There must be somebody there, because
somebody must have _said_ 'Nobody.'" So he put his head back in the
hole, and said:

"Hallo, Rabbit, isn't that you?"

"No," said Rabbit, in a different sort of voice this time.

"But isn't that Rabbit's voice?"

"I don't _think_ so," said Rabbit. "It isn't _meant_ to be."

"Oh!" said Pooh.

He took his head out of the hole, and had another think, and then he put
it back, and said:

"Well, could you very kindly tell me where Rabbit is?"

"He has gone to see his friend Pooh Bear, who is a great friend of his."

"But this _is_ Me!" said Bear, very much surprised.

"What sort of Me?"

"Pooh Bear."

"Are you sure?" said Rabbit, still more surprised.

"Quite, quite sure," said Pooh.

"Oh, well, then, come in."

So Pooh pushed and pushed and pushed his way through the hole, and at
last he got in.

"You were quite right," said Rabbit, looking at him all over. "It _is_
you. Glad to see you."

"Who did you think it was?"

"Well, I wasn't sure. You know how it is in the Forest. One can't have
_anybody_ coming into one's house. One has to be _careful_. What about a
mouthful of something?"

Pooh always liked a little something at eleven o'clock in the morning,
and he was very glad to see Rabbit getting out the plates and mugs; and
when Rabbit said, "Honey or condensed milk with your bread?" he was so
excited that he said, "Both," and then, so as not to seem greedy, he
added, "But don't bother about the bread, please." And for a long time
after that he said nothing ... until at last, humming to himself in a
rather sticky voice, he got up, shook Rabbit lovingly by the paw, and
said that he must be going on.

"Must you?" said Rabbit politely.

"Well," said Pooh, "I could stay a little longer if it--if you----" and
he tried very hard to look in the direction of the larder.

"As a matter of fact," said Rabbit, "I was going out myself directly."

"Oh, well, then, I'll be going on. Good-bye."

"Well, good-bye, if you're sure you won't have any more."

"_Is_ there any more?" asked Pooh quickly.

Rabbit took the covers off the dishes, and said, "No, there wasn't."

"I thought not," said Pooh, nodding to himself. "Well, good-bye. I must
be going on."

So he started to climb out of the hole. He pulled with his front paws,
and pushed with his back paws, and in a little while his nose was out in
the open again ... and then his ears ... and then his front paws ...
and then his shoulders ... and then----

"Oh, help!" said Pooh. "I'd better go back."

"Oh, bother!" said Pooh. "I shall have to go on."

"I can't do either!" said Pooh. "Oh, help _and_ bother!"

Now by this time Rabbit wanted to go for a walk too, and finding the
front door full, he went out by the back door, and came round to Pooh,
and looked at him.

"Hallo, are you stuck?" he asked.

"N-no," said Pooh carelessly. "Just resting and thinking and humming to
myself."

"Here, give us a paw."

Pooh Bear stretched out a paw, and Rabbit pulled and pulled and
pulled....

"_Ow!_" cried Pooh. "You're hurting!"

"The fact is," said Rabbit, "you're stuck."

"It all comes," said Pooh crossly, "of not having front doors big
enough."

"It all comes," said Rabbit sternly, "of eating too much. I thought at
the time," said Rabbit, "only I didn't like to say anything," said
Rabbit, "that one of us was eating too much," said Rabbit, "and I knew
it wasn't _me_," he said. "Well, well, I shall go and fetch Christopher
Robin."

Christopher Robin lived at the other end of the Forest, and when he came
back with Rabbit, and saw the front half of Pooh, he said, "Silly old
Bear," in such a loving voice that everybody felt quite hopeful again.

"I was just beginning to think," said Bear, sniffing slightly, "that
Rabbit might never be able to use his front door again. And I should
_hate_ that," he said.

"So should I," said Rabbit.

"Use his front door again?" said Christopher Robin. "Of course he'll use
his front door again."

"Good," said Rabbit.

"If we can't pull you out, Pooh, we might push you back."

Rabbit scratched his whiskers thoughtfully, and pointed out that, when
once Pooh was pushed back, he was back, and of course nobody was more
glad to see Pooh than _he_ was, still there it was, some lived in trees
and some lived underground, and----

"You mean I'd _never_ get out?" said Pooh.

"I mean," said Rabbit, "that having got _so_ far, it seems a pity to
waste it."

Christopher Robin nodded.

"Then there's only one thing to be done," he said. "We shall have to
wait for you to get thin again."

"How long does getting thin take?" asked Pooh anxiously.

"About a week, I should think."

"But I can't stay here for a _week_!"

"You can _stay_ here all right, silly old Bear. It's getting you out
which is so difficult."

"We'll read to you," said Rabbit cheerfully. "And I hope it won't snow,"
he added. "And I say, old fellow, you're taking up a good deal of room
in my house--_do_ you mind if I use your back legs as a towel-horse?
Because, I mean, there they are--doing nothing--and it would be very
convenient just to hang the towels on them."

"A week!" said Pooh gloomily. "_What about meals?_"

"I'm afraid no meals," said Christopher Robin, "because of getting thin
quicker. But we _will_ read to you."

Bear began to sigh, and then found he couldn't because he was so tightly
stuck; and a tear rolled down his eye, as he said:

"Then would you read a Sustaining Book, such as would help and comfort a
Wedged Bear in Great Tightness?"

So for a week Christopher Robin read that sort of book at the North end
of Pooh, and Rabbit hung his washing on the South end ... and in
between Bear felt himself getting slenderer and slenderer. And at the
end of the week Christopher Robin said, "_Now!_"

So he took hold of Pooh's front paws and Rabbit took hold of Christopher
Robin, and all Rabbit's friends and relations took hold of Rabbit, and
they all pulled together....

And for a long time Pooh only said "_Ow!_" ...

And "_Oh!_" ...

And then, all of a sudden, he said "_Pop!_" just as if a cork were
coming out of a bottle.

And Christopher Robin and Rabbit and all Rabbit's friends and relations
went head-over-heels backwards ... and on the top of them came
Winnie-the-Pooh--free!

So, with a nod of thanks to his friends, he went on with his walk
through the forest, humming proudly to himself. But, Christopher Robin
looked after him lovingly, and said to himself, "Silly old Bear!"`,
        },
        {
          title: 'Winnie the Pooh, Chapter 3',
          level: 5,
          imageId: 'pg67098.cover.medium_gkl42o',
          public: true,
          updated: date,
          languageId: 'en',
          userId: user.id,
          text: `IN WHICH POOH AND PIGLET GO HUNTING
AND NEARLY CATCH A WOOZLE


The Piglet lived in a very grand house in the middle of a beech-tree,
and the beech-tree was in the middle of the forest, and the Piglet lived
in the middle of the house. Next to his house was a piece of broken
board which had: "TRESPASSERS W" on it. When Christopher Robin asked the
Piglet what it meant, he said it was his grandfather's name, and had
been in the family for a long time, Christopher Robin said you
_couldn't_ be called Trespassers W, and Piglet said yes, you could,
because his grandfather was, and it was short for Trespassers Will,
which was short for Trespassers William. And his grandfather had had two
names in case he lost one--Trespassers after an uncle, and William after
Trespassers.

"I've got two names," said Christopher Robin carelessly.

"Well, there you are, that proves it," said Piglet.

One fine winter's day when Piglet was brushing away the snow in front of
his house, he happened to look up, and there was Winnie-the-Pooh. Pooh
was walking round and round in a circle, thinking of something else, and
when Piglet called to him, he just went on walking.

"Hallo!" said Piglet, "what are _you_ doing?"

"Hunting," said Pooh.

"Hunting what?"

"Tracking something," said Winnie-the-Pooh very mysteriously.

"Tracking what?" said Piglet, coming closer.

"That's just what I ask myself. I ask myself, What?"

"What do you think you'll answer?"

"I shall have to wait until I catch up with it," said Winnie-the-Pooh.
"Now, look there." He pointed to the ground in front of him. "What do
you see there?"

"Tracks," said Piglet. "Paw-marks." He gave a little squeak of
excitement. "Oh, Pooh! Do you think it's a--a--a Woozle?"

"It may be," said Pooh. "Sometimes it is, and sometimes it isn't. You
never can tell with paw-marks."

With these few words he went on tracking, and Piglet, after watching him
for a minute or two, ran after him. Winnie-the-Pooh had come to a sudden
stop, and was bending over the tracks in a puzzled sort of way.

"What's the matter?" asked Piglet.

"It's a very funny thing," said Bear, "but there seem to be
_two_ animals now. This--whatever-it-was--has been joined by
another--whatever-it-is--and the two of them are now proceeding
in company. Would you mind coming with me, Piglet, in case they
turn out to be Hostile Animals?"

Piglet scratched his ear in a nice sort of way, and said that he had
nothing to do until Friday, and would be delighted to come, in case it
really _was_ a Woozle.

"You mean, in case it really is two Woozles," said Winnie-the-Pooh, and
Piglet said that anyhow he had nothing to do until Friday. So off they
went together.

There was a small spinney of larch trees just here, and it seemed as if
the two Woozles, if that is what they were, had been going round this
spinney; so round this spinney went Pooh and Piglet after them; Piglet
passing the time by telling Pooh what his Grandfather Trespassers W had
done to Remove Stiffness after Tracking, and how his Grandfather
Trespassers W had suffered in his later years from Shortness of Breath,
and other matters of interest, and Pooh wondering what a Grandfather was
like, and if perhaps this was Two Grandfathers they were after now, and,
if so, whether he would be allowed to take one home and keep it, and
what Christopher Robin would say. And still the tracks went on in front
of them....

Suddenly Winnie-the-Pooh stopped, and pointed excitedly in front of him.
"_Look!_"

"_What?_" said Piglet, with a jump. And then, to show that he hadn't
been frightened, he jumped up and down once or twice more in an
exercising sort of way.

"The tracks!" said Pooh. "_A third animal has joined the other two!_"

"Pooh!" cried Piglet. "Do you think it is another Woozle?"

"No," said Pooh, "because it makes different marks. It is either Two
Woozles and one, as it might be, Wizzle, or Two, as it might be, Wizzles
and one, if so it is, Woozle. Let us continue to follow them."

So they went on, feeling just a little anxious now, in case the three
animals in front of them were of Hostile Intent. And Piglet wished very
much that his Grandfather T. W. were there, instead of elsewhere, and
Pooh thought how nice it would be if they met Christopher Robin suddenly
but quite accidentally, and only because he liked Christopher Robin so
much. And then, all of a sudden, Winnie-the-Pooh stopped again, and
licked the tip of his nose in a cooling manner, for he was feeling more
hot and anxious than ever in his life before. _There were four animals
in front of them!_

"Do you see, Piglet? Look at their tracks! Three, as it were, Woozles,
and one, as it was, Wizzle. _Another Woozle has joined them!_"

And so it seemed to be. There were the tracks; crossing over each other
here, getting muddled up with each other there; but, quite plainly every
now and then, the tracks of four sets of paws.

"I _think_," said Piglet, when he had licked the tip of his nose too,
and found that it brought very little comfort, "I _think_ that I have
just remembered something. I have just remembered something that I
forgot to do yesterday and shan't be able to do to-morrow. So I suppose
I really ought to go back and do it now."

"We'll do it this afternoon, and I'll come with you," said Pooh.

"It isn't the sort of thing you can do in the afternoon," said Piglet
quickly. "It's a very particular morning thing, that has to be done in
the morning, and, if possible, between the hours of----What would you
say the time was?"

"About twelve," said Winnie-the-Pooh, looking at the sun.

"Between, as I was saying, the hours of twelve and twelve five. So,
really, dear old Pooh, if you'll excuse me----_What's that?_"

Pooh looked up at the sky, and then, as he heard the whistle again, he
looked up into the branches of a big oak-tree, and then he saw a friend
of his.

"It's Christopher Robin," he said.

"Ah, then you'll be all right," said Piglet. "You'll be quite safe with
_him_. Good-bye," and he trotted off home as quickly as he could, very
glad to be Out of All Danger again.

Christopher Robin came slowly down his tree.

"Silly old Bear," he said, "what _were_ you doing? First you went round
the spinney twice by yourself, and then Piglet ran after you and you
went round again together, and then you were just going round a fourth
time----"

"Wait a moment," said Winnie-the-Pooh, holding up his paw.

He sat down and thought, in the most thoughtful way he could think. Then
he fitted his paw into one of the Tracks ... and then he scratched his
nose twice, and stood up.

"Yes," said Winnie-the-Pooh.

"I see now," said Winnie-the-Pooh.

"I have been Foolish and Deluded," said he, "and I am a Bear of No Brain
at All."

"You're the Best Bear in All the World," said Christopher Robin
soothingly.

"Am I?" said Pooh hopefully. And then he brightened up suddenly.

"Anyhow," he said, "it is nearly Luncheon Time."

So he went home for it..`,
        },
      ],
    });
    console.log('Created lessons');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await pris.$disconnect();
  }
};

load();
