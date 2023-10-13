import KonvaFactory from '../factories/KonvaFactory.ts'
import { AnimalsWithImages } from '../types/data.ts'
import { Image } from 'konva/lib/shapes/Image'
import CursorManager from '../helpers/CursorManager.ts'

export default class Game {
  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly animalsWithImages: AnimalsWithImages,
  ) {
    let stage = this.konvaFactory.createStage()

    let backgroundLayer = this.konvaFactory.createLayer()
    let animalDropLayer = this.konvaFactory.createLayer()
    let animalLayer = this.konvaFactory.createLayer()

    stage.add(backgroundLayer)
    stage.add(animalDropLayer)
    stage.add(animalLayer)

    backgroundLayer.add(this.konvaFactory.createBackgroundImage())

    var score = 3

    // create draggable animals
    for (let animalName in this.animalsWithImages) {
      // anonymous function to induce scope
      ;(function (that) {
        let anim = that.animalsWithImages[animalName]

        let animal = that.konvaFactory.createImage(anim)
        let animalDropImage = that.konvaFactory.createDropImage(anim)

        animal.on('dragstart', function () {
          this.moveToTop()
        })
        /*
         * check if animal is in the right spot and
         * snap into place if it is
         */
        animal.on('dragend', function () {
          if (!animal.inRightPlace && that.isNearOutline(animal, animalDropImage)) {
            animal.position({
              x: animalDropImage.x(),
              y: animalDropImage.y(),
            })
            animal.inRightPlace = true

            if (++score >= 4) {
              alert('You win! Enjoy your booty!')
            }

            // disable drag and drop
            setTimeout(function () {
              animal.draggable(false)
            }, 50)
          }
        })
        // make animal glow on mouseover
        animal.on('mouseover', function () {
          animal.image(anim.images.glow)
          CursorManager.setPointCursor()
        })
        // return animal on mouseout
        animal.on('mouseout', function () {
          animal.image(anim.images.origin)
          CursorManager.setDefaultCursor()
        })

        animal.on('dragmove', function () {
          CursorManager.setPointCursor()
        })

        animalDropLayer.add(animalDropImage)
        animalLayer.add(animal)
      })(this)
    }
  }

  isNearOutline(animal: Image, animalDropImage: Image): boolean {
    const a = animal
    const o = animalDropImage
    const ax = a.x()
    const ay = a.y()

    return ax > o.x() - 20 && ax < o.x() + 20 && ay > o.y() - 20 && ay < o.y() + 20
  }
}
