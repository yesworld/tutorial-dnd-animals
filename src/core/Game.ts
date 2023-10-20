import KonvaFactory from '../factories/KonvaFactory.ts'
import { AnimalsWithImages } from '../types/data.ts'
import AnimalManager from './AnimalManager.ts'
import AnimalEventObserver, { EAnimalEvents } from '../types/AnimalEventObserver.ts'
import AudioService from '../services/AudioService.ts'

export default class Game implements AnimalEventObserver {
  private score = 0
  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly audioService: AudioService,
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

      const animalManager = new AnimalManager(
        konvaAnimal,
        konvaAnimalDrop,
        animalData.images.origin,
        animalData.images.glow,
      )
      animalManager.subscribe(this)
      animalManager.subscribe(this.audioService)

      animalDropLayer.add(konvaAnimalDrop)
      animalLayer.add(konvaAnimal)
    }
  }

  onChangeScore() {
    if (--this.score !== 0) {
      return
    }

    this.audioService.playWin()
    setTimeout(() => alert('You win! Enjoy your booty!'), 0)
  }

  update(eventType: EAnimalEvents, data?: any): void {
    if (eventType === EAnimalEvents.DRAG_END && data?.success) {
      this.onChangeScore()
    }
  }
}
