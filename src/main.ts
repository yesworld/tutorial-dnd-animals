import './style.css'
import { dataAnimals, dataBackground } from './sources.ts'
import ImageLoaderService from './services/ImageLoaderService.ts'
import GameBuilder from './core/GameBuilder.ts'

const gameBuilder = new GameBuilder(new ImageLoaderService(), dataAnimals)

const game = await gameBuilder.loadBackground(dataBackground).loadImageAnimals().build()
