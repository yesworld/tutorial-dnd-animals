import './style.css'
import { dataAnimals, dataBackground } from './sources.ts'
import ImageLoaderService from './services/ImageLoaderService.ts'
import GameBuilder from './core/GameBuilder.ts'

const gameBuilder = new GameBuilder(new ImageLoaderService())

const game = await gameBuilder
  .loadBackground(dataBackground)
  .loadImageAnimals(dataAnimals)
  .build()
