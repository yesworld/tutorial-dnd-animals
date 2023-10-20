export enum EAnimalEvents {
  DRAG_START = 'dragstart',
  DRAG_END = 'dragend',
}

export default interface AnimalEventObserver {
  update(eventType: string, data?: any): void
}

export interface AnimalEventSubject {
  subscribe(observer: AnimalEventObserver): void
  unsubscribe(observer: AnimalEventObserver): void
  notifyObservers(eventType: string, data?: any): void
}
