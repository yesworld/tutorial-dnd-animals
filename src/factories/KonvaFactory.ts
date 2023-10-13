import Konva from 'konva'
import { AnimalWithImages } from '../types/data.ts'
import { randomInterval } from '../helpers/randomInterval.ts'
import { Image } from 'konva/lib/shapes/Image'
import { Layer } from 'konva/lib/Layer'
import { Stage } from 'konva/lib/Stage'
import CanvasSizeService from '../services/CanvasSizeService.ts'

export default class KonvaFactory {
  constructor(
    private readonly sizeService: CanvasSizeService,
    private readonly backgroundImage: HTMLImageElement,
  ) {}
  createStage(): Stage {
    return new Konva.Stage({
      container: 'app',
      width: this.sizeService.getWidth(),
      height: this.sizeService.getHeight(),
    })
  }
  createLayer(): Layer {
    return new Konva.Layer()
  }
  createImage(animal: AnimalWithImages): Image {
    const width = animal.width * this.sizeService.getScale()
    const height = animal.height * this.sizeService.getScale()

    return new Konva.Image({
      image: animal.images.origin,
      x: randomInterval(0, this.sizeService.getWidth() - width),
      y: randomInterval(0, this.sizeService.getHeight() - height),
      draggable: true,
      width,
      height,
    })
  }
  createDropImage(animal: AnimalWithImages): Image {
    const width = animal.width * this.sizeService.getScale()
    const height = animal.height * this.sizeService.getScale()

    return new Konva.Image({
      image: animal.images.drop,
      x: animal.drop.x * this.sizeService.getScale(),
      y: animal.drop.y * this.sizeService.getScale(),
      width,
      height,
    })
  }
  createBackgroundImage(): Image {
    return new Konva.Image({
      image: this.backgroundImage,
      width: this.sizeService.getWidth(),
      height: this.sizeService.getHeight(),
    })
  }
}
