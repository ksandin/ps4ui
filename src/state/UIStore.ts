import { action, observable } from 'mobx';
import { Size } from './Size';

export class UIStore {
  @observable windowSize: Size = { width: 0, height: 0 };
  @action setWindowSize(size: Size) {
    this.windowSize = size;
  }
}
