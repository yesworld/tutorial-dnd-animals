export type AnimalImages = {
  [key: string]: {
    origin: HTMLImageElement
    glow: HTMLImageElement
    drop: HTMLImageElement
  }
}
export type AnimalPromiseImages = {
  [key: string]: {
    origin: Promise<HTMLImageElement>
    glow: Promise<HTMLImageElement>
    drop: Promise<HTMLImageElement>
  }
}
