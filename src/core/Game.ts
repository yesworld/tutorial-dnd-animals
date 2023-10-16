import KonvaFactory from '../factories/KonvaFactory.ts'
import { AnimalsWithImages } from '../types/data.ts'
import AnimalManager from './AnimalManager.ts'

export default class Game {
  private score = 0
  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly animalsWithImages: AnimalsWithImages,
  ) {
    const stage = this.konvaFactory.createStage()
    const backgroundLayer = this.konvaFactory.createLayer()
    const animalDropLayer = this.konvaFactory.createLayer()
    const animalLayer = this.konvaFactory.createLayer()

    stage.add(backgroundLayer)
    stage.add(animalDropLayer)
    stage.add(animalLayer)

    backgroundLayer.add(this.konvaFactory.createBackgroundImage())

    this.score = Object.keys(this.animalsWithImages).length
    for (let animalName in this.animalsWithImages) {
      const animalData = this.animalsWithImages[animalName]
      const konvaAnimal = this.konvaFactory.createImage(animalData)
      const konvaAnimalDrop = this.konvaFactory.createDropImage(animalData)

      new AnimalManager(
        konvaAnimal,
        konvaAnimalDrop,
        this.onChangeScore.bind(this),
        animalData.images,
      )

      animalDropLayer.add(konvaAnimalDrop)
      animalLayer.add(konvaAnimal)
    }
  }

  onChangeScore() {
    if (--this.score !== 0) {
      return
    }

    alert('You win! Enjoy your booty!')
  }
}
