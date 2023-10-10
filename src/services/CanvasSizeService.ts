export default class CanvasSizeService {
  private readonly width: number
  private readonly height: number
  private readonly scale: number

  constructor(
    windowWidth: number,
    windowHeight: number,
    backgroundWidth: number,
    backgroundHeight: number,
  ) {
    const imageAspect = backgroundWidth / backgroundHeight
    const windowAspect = windowWidth / windowHeight

    let newWidth = 0,
      newHeight = 0
    if (imageAspect > windowAspect) {
      newWidth = windowWidth
      newHeight = newWidth / imageAspect
    } else {
      newHeight = windowHeight
      newWidth = newHeight * imageAspect
    }

    this.width = newWidth
    this.height = newHeight

    this.scale = newWidth / backgroundWidth
  }
  getWidth(): number {
    return this.width
  }
  getHeight(): number {
    return this.height
  }
  getScale(): number {
    return this.scale
  }
}
