import Game from './Game.ts'
import ImageLoaderService from '../services/ImageLoaderService.ts'
import { AnimalPromiseImages } from '../types/image.ts'
import { AnimalsData, AnimalsWithImages, ImageData } from '../types/data.ts'
import KonvaFactory from '../factories/KonvaFactory.ts'
import CanvasSizeService from '../services/CanvasSizeService.ts'

export default class GameBuilder {
  private backgroundImage: Promise<HTMLImageElement> | null = null
  private animalImages: AnimalPromiseImages = {}

  constructor(
    private readonly imageLoaderService: ImageLoaderService,
    private readonly dataAnimals: AnimalsData,
  ) {}

  loadBackground(dataBackground: ImageData): GameBuilder {
    this.backgroundImage = this.imageLoaderService.load(
      dataBackground.src,
      dataBackground.width,
      dataBackground.height,
    )

    return this
  }

  loadImageAnimals(): GameBuilder {
    for (const animalName in this.dataAnimals) {
      const animal = this.dataAnimals[animalName]
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

    const animalsWithImages: AnimalsWithImages = {}
    for (const animalName in this.animalImages) {
      const animalImage = this.animalImages[animalName]
      const [origin, glow, drop] = await Promise.all([
        animalImage.origin,
        animalImage.glow,
        animalImage.drop,
      ])

      animalsWithImages[animalName] = {
        ...this.dataAnimals[animalName],
        images: {
          origin,
          glow,
          drop,
        },
      }
    }

    const canvasSizeService = new CanvasSizeService(
      window.innerWidth,
      window.innerHeight,
      backgroundImage.width,
      backgroundImage.height,
    )
    const konvaFactory = new KonvaFactory(canvasSizeService, backgroundImage)

    return new Game(konvaFactory, animalsWithImages)
  }
}
