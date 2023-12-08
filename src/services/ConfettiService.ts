import confetti, { Options } from 'canvas-confetti'
import { randomInterval } from '../helpers/randomInterval.ts'

export default class ConfettiService {
  private readonly options: Options
  private timerId?: NodeJS.Timeout

  constructor(options = {}) {
    const defaultOptions = {
      startVelocity: 30,
      spread: 360,
      ticks: 100,
      zIndex: 0,
      particleCount: 100,
      decay: 0.9,
    }

    this.options = { ...defaultOptions, ...options }
  }
  start(seconds: number = 120) {
    const duration = seconds * 1000
    let animationEnd = Date.now() + duration

    this.timerId = setInterval(() => {
      let timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return this.stop()
      }

      const particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti({
        ...this.options,
        particleCount,
        origin: { x: randomInterval(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...this.options,
        particleCount,
        origin: { x: randomInterval(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }
  stop() {
    clearInterval(this.timerId)
  }
}
