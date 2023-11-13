import KonvaFactory from '../factories/KonvaFactory.ts'
import { AnimalsWithImages } from '../types/data.ts'
import AnimalManager from './AnimalManager.ts'
import AnimalEventObserver, { EAnimalEvents } from '../types/AnimalEventObserver.ts'
import AudioService from '../services/AudioService.ts'
import { Layer } from 'konva/lib/Layer'

export default class Game implements AnimalEventObserver {
  private score = 0
  private readonly animalDropLayer: Layer
  private readonly animalLayer: Layer
  private endGameCallback = (): void => {}

  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly audioService: AudioService,
    private readonly animalsWithImages: AnimalsWithImages,
  ) {
    const stage = this.konvaFactory.createStage()
    const backgroundLayer = this.konvaFactory.createLayer()
    this.animalDropLayer = this.konvaFactory.createLayer()
    this.animalLayer = this.konvaFactory.createLayer()

    stage.add(backgroundLayer)
    stage.add(this.animalDropLayer)
    stage.add(this.animalLayer)

    backgroundLayer.add(this.konvaFactory.createBackgroundImage())
  }

  start() {
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

      this.animalDropLayer.add(konvaAnimalDrop)
      this.animalLayer.add(konvaAnimal)
    }
  }
  restart() {
    this.animalDropLayer.destroyChildren()
    this.animalLayer.destroyChildren()

    this.start()
  }
  onEndGame(fn: () => void) {
    this.endGameCallback = fn
  }
  onChangeScore() {
    if (--this.score !== 0) {
      return
    }

    this.audioService.playWin()
    this.endGameCallback()
  }

  update(eventType: EAnimalEvents, data?: any): void {
    if (eventType === EAnimalEvents.DRAG_END && data?.success) {
      this.onChangeScore()
    }
  }
}
