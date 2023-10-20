import './style.css'
import { dataAnimals, dataBackground, soundsData } from './sources.ts'
import ImageLoaderService from './services/ImageLoaderService.ts'
import GameBuilder from './core/GameBuilder.ts'
import AudioService from './services/AudioService.ts'

const gameBuilder = new GameBuilder(
  new ImageLoaderService(),
  new AudioService('/sound/'),
  dataAnimals,
)

const game = await gameBuilder
  .loadSounds(soundsData)
  .loadBackground(dataBackground)
  .loadImageAnimals()
  .build()
