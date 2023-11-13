import { Howl } from 'howler'
import AnimalEventObserver, { EAnimalEvents } from '../types/AnimalEventObserver.ts'

type ISound = {
  [trackName: string]: Howl
}

export default class AudioService implements AnimalEventObserver {
  private sounds: ISound = {}
  private isMute = false

  constructor(private readonly folder: string) {}

  toggleSound(): boolean {
    this.isMute = !this.isMute

    return this.isMute
  }
  load(trackName: string, fileName: string) {
    const src = this.folder + fileName
    this.sounds[trackName] = new Howl({ src })
  }

  play(trackName: string, volume?: number) {
    if (!this.sounds[trackName] || this.isMute) {
      return
    }

    if (volume) {
      this.sounds[trackName].volume(volume)
    }

    this.sounds[trackName].play()
  }

  update(eventType: EAnimalEvents, data?: any): void {
    if (eventType === EAnimalEvents.DRAG_END && data?.success) {
      this.play('pop-up-off')
    } else if (eventType === EAnimalEvents.DRAG_END && data?.success === false) {
      this.play('pop-down', 0.1)
    } else if (eventType === EAnimalEvents.DRAG_START) {
      this.play('pop-up-on', 0.3)
    }
  }

  playWin() {
    this.play('win', 0.1)
  }
}
