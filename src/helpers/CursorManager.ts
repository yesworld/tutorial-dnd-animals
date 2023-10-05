class CursorManager {
  constructor(private readonly body: HTMLElement) {}
  setPointCursor() {
    this.body.style.cursor = 'pointer'
  }
  setDefaultCursor() {
    this.body.style.cursor = 'default'
  }
}

export default new CursorManager(document.body)
