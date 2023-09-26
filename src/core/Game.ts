import KonvaFactory from '../factories/KonvaFactory.ts'
import { AnimalsWithImages } from '../types/data.ts'

export default class Game {
  constructor(
    private readonly konvaFactory: KonvaFactory,
    private readonly animalsWithImages: AnimalsWithImages,
  ) {
    let stage = this.konvaFactory.createStage()

    let background = this.konvaFactory.createLayer()
    let animalDropLayer = this.konvaFactory.createLayer()
    let animalLayer = this.konvaFactory.createLayer()
    var score = 3

    // create draggable animals
    for (var key in this.animalsWithImages) {
      // anonymous function to induce scope
      ;(function (that) {
        let anim = that.animalsWithImages[key]

        let animal = that.konvaFactory.createOriginImage(anim)

        animal.on('dragstart', function () {
          this.moveToTop()
        })
        /*
         * check if animal is in the right spot and
         * snap into place if it is
         */
        animal.on('dragend', function () {
          if (!animal.inRightPlace && that.isNearOutline(animal, anim.drop)) {
            animal.position({
              x: anim.drop.x,
              y: anim.drop.y,
            })
            animal.inRightPlace = true

            if (++score >= 4) {
              var text = 'You win! Enjoy your booty!'
              that.drawBackground(background, that.konvaFactory.getHtmlBackground(), text)
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
          document.body.style.cursor = 'pointer'
        })
        // return animal on mouseout
        animal.on('mouseout', function () {
          animal.image(anim.images.origin)
          document.body.style.cursor = 'default'
        })

        animal.on('dragmove', function () {
          document.body.style.cursor = 'pointer'
        })

        let outline = that.konvaFactory.createDropImage(anim)

        animalDropLayer.add(outline)
        animalLayer.add(animal)
      })(this)
    }

    stage.add(background)
    stage.add(animalDropLayer)
    stage.add(animalLayer)

    this.drawBackground(
      background,
      this.konvaFactory.getHtmlBackground(),
      'Ahoy! Put the animals on the beach!',
    )
  }

  isNearOutline(animal, outline) {
    var a = animal
    var o = outline
    var ax = a.x()
    var ay = a.y()

    if (ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
      return true
    } else {
      return false
    }
  }

  drawBackground(background, beachImg, text) {
    var context = background.getContext()
    context.drawImage(beachImg, 0, 0)
    context.setAttr('font', '20pt Calibri')
    context.setAttr('textAlign', 'center')
    context.setAttr('fillStyle', 'white')
    context.fillText(text, background.getStage().width() / 2, 40)
  }
}
