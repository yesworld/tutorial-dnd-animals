import CursorManager from '../helpers/CursorManager.ts'
import { Image } from 'konva/lib/shapes/Image'
import AnimalEventObserver, {
  AnimalEventSubject,
  EAnimalEvents,
} from '../types/AnimalEventObserver.ts'

export default class AnimalManager implements AnimalEventSubject {
  private observers: AnimalEventObserver[] = []

  constructor(
    private readonly konvaAnimal: Image,
    private readonly konvaAnimalDrop: Image,
    imageOrigin: HTMLImageElement,
    imageGlow: HTMLImageElement,
  ) {
    this.cacheAndDraw(this.konvaAnimal)

    konvaAnimal.on('dragstart', this.onDragStart.bind(this))
    konvaAnimal.on('dragend', this.onDragEnd.bind(this))
    konvaAnimal.on('mouseover', this.onMouseOver.bind(this, imageGlow))
    konvaAnimal.on('mouseout', this.onMouseOut.bind(this, imageOrigin))
    konvaAnimal.on('dragmove', this.onDragMove.bind(this))
  }
  onDragStart() {
    this.konvaAnimal.moveToTop()
    this.notifyObservers(EAnimalEvents.DRAG_START)
  }
  onDragEnd() {
    if (!this.isNearOutline(this.konvaAnimal, this.konvaAnimalDrop)) {
      this.notifyObservers(EAnimalEvents.DRAG_END, { success: false })
      return
    }

    this.konvaAnimal.position({
      x: this.konvaAnimalDrop.x(),
      y: this.konvaAnimalDrop.y(),
    })

    this.konvaAnimal.draggable(false)
    this.konvaAnimal.off('dragstart dragend mouseover')

    this.notifyObservers(EAnimalEvents.DRAG_END, { success: true })
  }

  onMouseOver(imageGlow: HTMLImageElement) {
    this.konvaAnimal.image(imageGlow)
    this.cacheAndDraw(this.konvaAnimal)
    CursorManager.setPointCursor()
  }

  onMouseOut(imageOrigin: HTMLImageElement) {
    this.konvaAnimal.image(imageOrigin)
    this.cacheAndDraw(this.konvaAnimal)
    CursorManager.setDefaultCursor()
  }

  onDragMove() {
    CursorManager.setGrabbingCursor()
  }

  isNearOutline(animal: Image, animalDropImage: Image): boolean {
    const a = animal
    const o = animalDropImage
    const ax = a.x()
    const ay = a.y()

    return ax > o.x() - 20 && ax < o.x() + 20 && ay > o.y() - 20 && ay < o.y() + 20
  }

  /**
   * @see https://konvajs.org/docs/events/Image_Events.html
   */
  cacheAndDraw(image: Image) {
    image.cache({
      pixelRatio: 3,
    })
    image.drawHitFromCache()
  }

  notifyObservers(eventType: EAnimalEvents, data?: any): void {
    this.observers.forEach((o) => o.update(eventType, data))
  }

  subscribe(observer: AnimalEventObserver): void {
    if (this.observers.includes(observer)) {
      return
    }

    this.observers.push(observer)
  }

  unsubscribe(observer: AnimalEventObserver): void {
    const observerIndex = this.observers.indexOf(observer)
    if (observerIndex > -1) {
      this.observers.splice(observerIndex, 1)
    }
  }
}
