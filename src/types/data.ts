type DropData = {
  src: string
  x: number
  y: number
}
type AnimalData = {
  src: string
  x: number
  y: number
  glow: string
  width: number
  height: number
  drop: DropData
}

export type AnimalsData = {
  [key: string]: Readonly<AnimalData>
}
