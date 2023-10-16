import CursorManager from '../helpers/CursorManager.ts'
import { Image } from 'konva/lib/shapes/Image'
import { AnimalImageElements } from '../types/image.ts'

export default class AnimalManager {
  constructor(
    private readonly konvaAnimal: Image,
    private readonly konvaAnimalDrop: Image,
    private readonly onDropSuccess: Function,
    htmlImages: AnimalImageElements['images'],
  ) {
    this.cacheAndDraw(this.konvaAnimal)

    konvaAnimal.on('dragstart', this.onDragStart.bind(this))
    konvaAnimal.on('dragend', this.onDragEnd.bind(this))
    konvaAnimal.on('mouseover', this.onMouseOver.bind(this, htmlImages.glow))
    konvaAnimal.on('mouseout', this.onMouseOut.bind(this, htmlImages.origin))
    konvaAnimal.on('dragmove', this.onDragMove.bind(this))
  }
  private onDragStart() {
    this.konvaAnimal.moveToTop()
  }
  private onDragEnd() {
    if (!this.isNearOutline(this.konvaAnimal, this.konvaAnimalDrop)) {
      return
    }

    this.konvaAnimal.position({
      x: this.konvaAnimalDrop.x(),
      y: this.konvaAnimalDrop.y(),
    })

    // disable drag and drop
    setTimeout(() => {
      this.konvaAnimal.draggable(false)
      this.onDropSuccess()
    }, 0)
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
}
