import './style.css'
import { dataAnimals, dataBackground, soundsData } from './sources.ts'
import ImageLoaderService from './services/ImageLoaderService.ts'
import GameBuilder from './core/GameBuilder.ts'
import AudioService from './services/AudioService.ts'
import ConfettiService from './services/ConfettiService.ts'

const audioService = new AudioService('/sound/')
const gameBuilder = new GameBuilder(new ImageLoaderService(), audioService, dataAnimals)

const game = await gameBuilder
  .loadSounds(soundsData)
  .loadBackground(dataBackground)
  .loadImageAnimals()
  .build()

game.start()

document.querySelector('#restart')?.addEventListener('click', () => {
  game.restart()
})

document.querySelector('#mute')?.addEventListener('click', (e: MouseEvent) => {
  const isMute = audioService.toggleSound()
  const button = e.target as HTMLButtonElement
  button.textContent = `Sound ${isMute ? '❌' : '🔉'}`
})

const confettiService = new ConfettiService()
game.onEndGame(() => {
  setTimeout(() => confettiService.start(3), 0)
})
