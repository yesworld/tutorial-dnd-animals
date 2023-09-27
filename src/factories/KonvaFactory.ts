import Konva from 'konva'
import { AnimalWithImages } from '../types/data.ts'
import { randomInterval } from '../helpers/randomInterval.ts'

export default class KonvaFactory {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {}
  createStage() {
    return new Konva.Stage({
      container: 'app',
      width: this.width,
      height: this.height,
    })
  }
  createLayer() {
    return new Konva.Layer()
  }
  createImage(animal: AnimalWithImages) {
    return new Konva.Image({
      image: animal.images.origin,
      x: randomInterval(0, this.width - animal.width),
      y: randomInterval(0, this.height - animal.height),
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
}
