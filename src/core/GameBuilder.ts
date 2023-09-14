import Game from './Game.ts'
import ImageLoaderService from '../services/ImageLoaderService.ts'
import { AnimalPromiseImages } from '../types/image.ts'
import { AnimalsData, ImageData } from '../types/data.ts'

export default class GameBuilder {
  private backgroundImage: Promise<HTMLImageElement> | null = null
  private animalImages: AnimalPromiseImages = {}

  constructor(private readonly imageLoaderService: ImageLoaderService) {}

  loadBackground(dataBackground: ImageData): GameBuilder {
    this.backgroundImage = this.imageLoaderService.load(
      dataBackground.src,
      dataBackground.width,
      dataBackground.height,
    )

    return this
  }

  loadImageAnimals(dataAnimals: AnimalsData): GameBuilder {
    for (const animalName in dataAnimals) {
      const animal = dataAnimals[animalName]
      this.animalImages[animalName] = {
        origin: this.imageLoaderService.load(animal.src, animal.width, animal.height),
        glow: this.imageLoaderService.load(animal.glow, animal.width, animal.height),
        drop: this.imageLoaderService.load(animal.drop.src, animal.width, animal.height),
      }
    }

    return this
  }
  async build(): Promise<Game> {
    const backgroundImage =
      this.backgroundImage !== null ? await this.backgroundImage : new Image()
    let sources = {
      beach: backgroundImage,
      lion: await this.animalImages['monkey'].origin,
      lion_glow: await this.animalImages['monkey'].glow,
      lion_black: await this.animalImages['monkey'].drop,
    }

    return new Game(sources)
  }
}
