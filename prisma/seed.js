const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.lesson.deleteMany();
    console.log('Deleted records in lesson table');
    await prisma.word.deleteMany();
    console.log('Deleted records in word table');
    await prisma.user.delete({
      where: {
        email: 'dylan.jacob.black@gmail.com',
      },
    });
    console.log('Deleted records in user table');

    const user = await prisma.user.create({
      data: {
        email: 'dylan.jacob.black@gmail.com',
        name: 'John Doe',
      },
    });
    console.log('Created user:', user);

    await prisma.word.createMany({
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
          phrase: 'know',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'saber, conocer',
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
          phrase: 'look',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'mirar, buscar',
        },
        {
          phrase: 'only',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'sólo, solamente',
        },
        {
          phrase: 'come',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'venir',
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
          phrase: 'think',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'pensar',
        },
        {
          phrase: 'also',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'también',
        },
        {
          phrase: 'back',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'atrás, de vuelta',
        },
        {
          phrase: 'after',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'después de',
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
          phrase: 'own',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'propio, propia',
        },
        {
          phrase: 'me',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'yo',
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
          phrase: 'back',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'atrás, de vuelta',
        },
        {
          phrase: 'through',
          familiarity: 2,
          languageId: 'en',
          userId: user.id,
          translation: 'a través de',
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

    await prisma.lesson.createMany({
      data: [
        {
          title: 'Twenty Thousand Leagues Under the Sea, Chapter One',
          level: 5,
          imageId: '33507_iqddhk',
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
          title: 'Huckleberry Finn, Chapter One: The Widow Douglas',
          level: 5,
          imageId: '71h7PNNAX-L._AC_SL1000__kqkfnz',
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
      ],
    });
    console.log('Created lessons');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
