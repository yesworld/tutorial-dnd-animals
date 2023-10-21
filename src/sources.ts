import { AnimalsData, ImageData, SoundsData } from './types/data.ts'

const dataBackground: ImageData = {
  src: 'background.svg',
  width: 750,
  height: 500,
}

const soundsData: Readonly<SoundsData> = {
  'pop-up-on': 'pop-up-on.mp3',
  'pop-up-off': 'pop-up-off.mp3',
  'pop-down': 'pop-down.mp3',
  win: 'kids-cheering.mp3',
}

const dataAnimals: AnimalsData = {
  monkey: {
    src: 'monkey.svg',
    x: 0,
    y: 0,
    glow: 'monkey-glow.svg',
    width: 78.9507,
    height: 113.0378,
    drop: {
      src: 'monkey-drop.svg',
      x: 122,
      y: 118,
    },
  },
  bear: {
    src: 'bear.svg',
    x: 0,
    y: 0,
    glow: 'bear-glow.svg',
    width: 203,
    height: 160,
    drop: {
      src: 'bear-drop.svg',
      x: 83,
      y: 258,
    },
  },
  bird: {
    src: 'bird.svg',
    x: 0,
    y: 0,
    glow: 'bird-glow.svg',
    width: 49,
    height: 46,
    drop: {
      src: 'bird-drop.svg',
      x: 473,
      y: 245,
    },
  },
  deer: {
    src: 'deer.svg',
    x: 0,
    y: 0,
    glow: 'deer-glow.svg',
    width: 170,
    height: 220,
    drop: {
      src: 'deer-drop.svg',
      x: 413,
      y: 204,
    },
  },
  lion: {
    src: 'lion.svg',
    x: 0,
    y: 0,
    glow: 'lion-glow.svg',
    width: 169,
    height: 245,
    drop: {
      src: 'lion-drop.svg',
      x: 267,
      y: 196,
    },
  },
  rabbit: {
    src: 'rabbit.svg',
    x: 0,
    y: 0,
    glow: 'rabbit-glow.svg',
    width: 94,
    height: 128,
    drop: {
      src: 'rabbit-drop.svg',
      x: 181,
      y: 305,
    },
  },
  squirrel: {
    src: 'squirrel.svg',
    x: 0,
    y: 0,
    glow: 'squirrel-glow.svg',
    width: 87,
    height: 86,
    drop: {
      src: 'squirrel-drop.svg',
      x: 412,
      y: 351,
    },
  },
}

export { dataBackground, dataAnimals, soundsData }
