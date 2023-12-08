import confetti, { Options } from 'canvas-confetti'
import { randomInterval } from '../helpers/randomInterval.ts'
import ConfettiService from './ConfettiService.ts'

export default class SnowService extends ConfettiService {
  constructor(options: Partial<Options> = {}) {
    super({
      particleCount: 1,
      startVelocity: 0,
      colors: ['#ffffff'],
      shapes: ['circle'],
      ...options,
    })
  }
  start(seconds: number = 120) {
    const duration = seconds * 1000
    let animationEnd = Date.now() + duration
    let skew = 1

    const frame = () => {
      let timeLeft = animationEnd - Date.now()
      let ticks = Math.max(200, 500 * (timeLeft / duration))

      confetti({
        ...this.options,
        ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        gravity: randomInterval(0.4, 0.6),
        scalar: randomInterval(0.4, 1),
        drift: randomInterval(-0.4, 0.4),
      })

      if (timeLeft > 0) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }
}
