import { AnimalsWithImages, AnimalWithImages } from '../types/data.ts'
import Konva from 'konva'
import { randomInterval } from '../helpers/random.ts'

export default class KonvaFactory {
  constructor(
    private readonly backgroundImage: HTMLImageElement,
    private readonly animalsWithImages: AnimalsWithImages,
  ) {}

  createStage() {
    return new Konva.Stage({
      container: 'app',
      width: this.backgroundImage.width,
      height: this.backgroundImage.height,
    })
  }

  createLayer() {
    return new Konva.Layer()
  }

  createOriginImage(animal: AnimalWithImages) {
    return new Konva.Image({
      image: animal.images.origin,
      x: randomInterval(0, this.backgroundImage.width - animal.width),
      y: randomInterval(0, this.backgroundImage.height - animal.height),
      draggable: true,
      width: animal.width,
      height: animal.height,
    })
  }

  createDropImage(animal: AnimalWithImages) {
    return new Konva.Image({
      image: animal.images.drop,
      x: animal.drop.x,
      y: animal.drop.y,
      width: animal.width,
      height: animal.height,
    })
  }

  getHtmlBackground() {
    return this.backgroundImage
  }
}
