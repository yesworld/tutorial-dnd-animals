import Konva from 'konva'
import { AnimalWithImages } from '../types/data.ts'
import { randomInterval } from '../helpers/randomInterval.ts'
import { Image } from 'konva/lib/shapes/Image'
import { Layer } from 'konva/lib/Layer'
import { Stage } from 'konva/lib/Stage'

export default class KonvaFactory {
  constructor(
    private readonly width: number,
    private readonly height: number,
  ) {}
  createStage(): Stage {
    return new Konva.Stage({
      container: 'app',
      width: this.width,
      height: this.height,
    })
  }
  createLayer(): Layer {
    return new Konva.Layer()
  }
  createImage(animal: AnimalWithImages): Image {
    return new Konva.Image({
      image: animal.images.origin,
      x: randomInterval(0, this.width - animal.width),
      y: randomInterval(0, this.height - animal.height),
      draggable: true,
      width: animal.width,
      height: animal.height,
    })
  }
  createDropImage(animal: AnimalWithImages): Image {
    return new Konva.Image({
      image: animal.images.drop,
      x: animal.drop.x,
      y: animal.drop.y,
      width: animal.width,
      height: animal.height,
    })
  }

  createBackgroundImage(backgroundImage: HTMLImageElement): Image {
    return new Konva.Image({
      image: backgroundImage,
      width: backgroundImage.width,
      height: backgroundImage.height,
    })
  }
}
