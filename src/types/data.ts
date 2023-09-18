export type ImageData = {
  src: string
  width: number
  height: number
}

type DropData = {
  src: string
  x: number
  y: number
}

type AnimalData = ImageData & {
  x: number
  y: number
  glow: string
  drop: DropData
}

export type AnimalsData = {
  [key: string]: Readonly<AnimalData>
}
