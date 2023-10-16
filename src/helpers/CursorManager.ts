class CursorManager {
  constructor(private readonly element: HTMLElement) {}
  setPointCursor() {
    this.element.style.cursor = 'pointer'
  }
  setDefaultCursor() {
    this.element.style.cursor = 'default'
  }
  setGrabbingCursor() {
    this.element.style.cursor = 'grabbing'
  }
}

export default new CursorManager(document.getElementById('app') || document.body)
