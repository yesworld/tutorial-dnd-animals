export default class ImageLoaderService {
  load(fileName: string, width: number, height: number): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.width = width
      img.height = height
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error(`Image ${fileName} could not be loaded.`))
      img.src = fileName
    })
  }
}
