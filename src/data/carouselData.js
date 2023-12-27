import money1 from '../assets/money1.png'
import money2 from '../assets/money2.png'
import bugatti from '../assets/bugatti.png'

export const carouselData = [
  {
    id: 1,
    slideOptions:
      'select-none rounded flex bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/95 to-gray-300/90   dark:to-slate-800/90 ',
    title: {
      en: 'Rich Simulator',
      es: 'Simulador de millonarios',
      de: 'Reicher Simulator',
    },
    subtitle: {
      en: 'Simulate the wealth of the top Forbes human beings and buy the most expensive items that you can think of.',
      es: 'Simule la riqueza de los seres humanos mas ricos del planeta segun Forbes y compre los products mas exclusivos que pueda pensar',
      de: 'Simulieren Sie den Reichtum der Top-Forbes-Menschen und kaufen Sie die teuersten Gegenstände, die Sie sich vorstellen können.',
    },
    actionLeft: { type: 'redirect', path: '/howtoplay' },
    actionRight: { type: 'redirect', path: '/characters' },
    buttonLeft: { en: 'More', es: 'Mas', de: 'Mehr' },
    buttonRight: {
      en: 'Choose player',
      es: 'Seleccione Personaje',
      de: 'Spieler auswählen',
    },
    img1: money1,
    imgOptions1: 'absolute left-0 opacity-10',
    img2: money2,
    imgOptions2: 'absolute right-0 opacity-5 lg:opacity-80',
  },
  {
    id: 2,
    slideOptions:
      'select-none rounded flex bg-gradient-to-br dark:bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/80 to-gray-300/90   dark:to-slate-800/90 ',
    title: {
      en: 'Bugatti La Voiture Noire',
      es: 'Bugatti La Voiture Noire',
      de: 'Bugatti La Voiture Noire',
    },
    subtitle: {
      en: 'With a price tag of $13.4 million, the one-off Bugatti La Voiture Noire is officially the most expensive new Bugatti ever made.',
      es: 'Con un precio de $13.4 millones, la estrepitosa Bugatti La Voiture Noire es oficialmente la nueva Bugatti mas cara alguna vez hecha.',
      de: 'Mit einem Preis von 13,4 Millionen Dollar ist der einmalige Bugatti La Voiture Noire offiziell der teuerste neue Bugatti aller Zeiten.',
    },
    actionLeft: { type: 'redirect', path: '/products/3' },
    actionRight: { type: 'redirect', path: '/characters' },
    buttonLeft: { en: 'More cars', es: 'Mas autos', de: 'Mehr Autos' },
    img2: bugatti,
    imgOptions2:
      'absolute bottom-5 right-0 lg:right-[5%] lg:scale-125 opacity-30 lg:opacity-80',
  },
  {
    id: 3,
    slideOptions:
      'select-none rounded flex bg-gradient-to-br dark:bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/80 to-gray-300/90   dark:to-slate-800/90 ',
    title: { en: 'Elon Musk', es: 'Elon Musk', de: 'Elon Musk' },
    subtitle: {
      en: 'Introducing new playable character. You can either way select him below, or see more available players on the player screen ',
      es: 'Nuevo personaje para jugar. Puede seleccionarlo aqui directamente, o bien elegir otros personajes disponibles en la pantalla de seleeccion de personaje',
      de: 'Einführung einer neuen spielbaren Figur. Du kannst ihn entweder unten auswählen oder weitere verfügbare Spieler auf dem Spielerbildschirm sehen',
    },
    actionLeft: { type: 'redirect', path: '/characters' },
    actionRight: { type: 'character', character: 'elon' },
    buttonLeft: {
      en: 'More charaters',
      es: 'Mas Personajes',
      de: 'Mehr Charaktere',
    },
    buttonRight: {
      en: 'Play as Elon NOW!',
      es: 'Jugar como Elon YA!',
      de: 'JETZT als Elon spielen!',
    },
    img2: 'https://microcapdaily.com/wp-content/uploads/2022/04/Elon-Musk-PNG-Pic-Background-1068x828.png',
    imgOptions2:
      'absolute bottom-16 scale-[1.1] lg:bottom-0 translate-y-[29%] -right-10 lg:right-0  lg:scale-[0.45] opacity-30 lg:opacity-80',
  },
  {
    id: 4,
    slideOptions:
      'select-none rounded flex bg-gradient-to-br dark:bg-gradient-to-tl from-slate-500/60 dark:from-indigo-900/60 via-gray-400/95 dark:via-gray-900/80 to-gray-300/90   dark:to-slate-800/90 ',
    title: { en: 'F-22 Raptor', es: 'F-22 Raptor', de: 'F-22 Raptor' },
    subtitle: {
      en: 'Introducing a fifth-generation stealth aircraft used by the USAF. Price point would range between $206 and $216 million for only one jet.',
      es: 'Introducimos un caza de quinta generacion y furtivo, usado por la fuerza aerea de estados unidos. El precio estara rondando los $216 millones por unidad',
      de: 'Einführung eines Stealth-Flugzeugs der fünften Generation, das von der USAF eingesetzt wird. Der Preis liegt zwischen 206 und 216 Mio. USD für ein einziges Flugzeug.',
    },
    actionLeft: { type: 'redirect', path: '/products/9' },
    buttonLeft: {
      en: 'Military planes',
      es: 'Aviones Militares',
      de: 'Militärflugzeuge',
    },
    img2: 'https://images.fineartamerica.com/images/artworkimages/medium/3/a-us-air-force-f-22-raptor-fifth-generation-stealth-air-superiority-fighter-tom-hill-transparent.png',
    imgOptions2:
      'absolute -bottom-20 lg:bottom-2 lg:right-20 md:-bottom-10 md:translate-y-[10%] right-5   opacity-30 lg:opacity-100',
  },
]

//to use on carousel slider button right set object to this
export const Elon = {
  name: 'Real-Time Billionaires',
  year: 0,
  uri: 'elon-musk',
  bio: '',
  rank: 2,
  listUri: 'rtb',
  finalWorth: 140089.618,
  person: {
    name: 'Elon Musk',
    uri: 'elon-musk',
    imageExists: true,
    squareImage:
      'https://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/416x416.jpg?background=000000&cropX1=0&cropX2=959&cropY1=0&cropY2=959',
  },
  visible: true,
  personName: 'Elon Musk',
  state: 'Texas',
  city: 'Austin',
  source: 'Tesla, SpaceX',
  industries: ['Automotive'],
  countryOfCitizenship: 'United States',
  timestamp: 1673142002861,
  version: 734433,
  naturalId: 'faris/35/0/14117',
  position: 2,
  imageExists: true,
  gender: 'M',
  birthDate: 46915200000,
  lastName: 'Musk',
  financialAssets: [
    {
      exchange: 'NASDAQ',
      ticker: 'TSLA-US',
      companyName: 'Tesla',
      numberOfShares: 356732212,
      sharePrice: 113.06,
      currencyCode: 'USD',
      exchangeRate: 1,
      interactive: true,
      currentPrice: 113.06,
    },
    {
      exchange: 'NASDAQ',
      ticker: 'TSLA-US',
      companyName: 'Tesla',
      numberOfShares: 0,
      exerciseOptionPrice: 6.24,
      sharePrice: 113.06,
      currencyCode: 'USD',
      exchangeRate: 1,
      interactive: false,
      currentPrice: 113.06,
    },
    {
      exchange: 'NASDAQ',
      ticker: 'TSLA-US',
      companyName: 'Tesla',
      numberOfShares: 278574999,
      exerciseOptionPrice: 23.33666666666667,
      sharePrice: 113.06,
      currencyCode: 'USD',
      exchangeRate: 1,
      interactive: false,
      currentPrice: 113.06,
    },
    {
      exchange: 'NASDAQ',
      ticker: 'TSLA-US',
      companyName: 'Tesla',
      numberOfShares: 6000,
      exerciseOptionPrice: 2.7886666666666664,
      sharePrice: 113.06,
      currencyCode: 'USD',
      exchangeRate: 1,
      interactive: false,
      currentPrice: 113.06,
    },
    {
      exchange: 'NASDAQ',
      ticker: 'TSLA-US',
      companyName: 'Tesla',
      numberOfShares: 6000,
      exerciseOptionPrice: 6.670000000000001,
      sharePrice: 113.06,
      currencyCode: 'USD',
      exchangeRate: 1,
      interactive: false,
      currentPrice: 113.06,
    },
  ],
  date: 725846400000,
  wealthList: false,
  estWorthPrev: 140089.618041,
  privateAssetsWorth: 74761.49669,
  familyList: false,
  interactive: true,
  archivedWorth: 219000,
  thumbnail:
    'http://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/280x425.jpg?fit=scale&background=000000',
  squareImage:
    'https://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/416x416.jpg?background=000000&cropX1=0&cropX2=959&cropY1=0&cropY2=959',
  bioSuppress: false,
  csfDisplayFields: [
    'rank',
    'age',
    'source',
    'finalWorth',
    'personName',
    'bios',
    'bio',
    'countryOfCitizenship',
  ],
  bios: [
    'Elon Musk cofounded six companies including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company.',
    'He owns about 25% of Tesla between stock and options, but has pledged more than half his stock as collateral for loans.',
    'SpaceX, founded in 2002, is worth $127 billion after a funding round in May 2022; it quadrupled its value in three years.',
    'Boring Company, which aims to defeat traffic, raised $675 million in April 2022 at a $5.7 billion valuation.',
    "Twitter's board agreed to sell the company to Musk for $44 billion in April 2022, after he disclosed a 9.1% stake and threatened a hostile takeover.",
    'The deal closed in October 2022 after Musk tried to back out and Twitter sued. Musk now owns an estimated 74% of the company. ',
  ],
  abouts: [
    "Musk, who says he's worried about population collapse, has nine children with three women including triplets and two sets of twins.",
    'As a kid in South Africa, Musk taught himself to code; he sold his first game, Blastar, for about $500.',
  ],
}
