class CursorManager {
  constructor(private readonly element: HTMLElement) {}
  setPointCursor() {
    this.element.style.cursor = 'pointer'
  }
  setDefaultCursor() {
    this.element.style.cursor = 'default'
  }
}

export default new CursorManager(document.getElementById('app') || document.body)
