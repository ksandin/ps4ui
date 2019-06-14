import { createContext } from 'react';

export class AppState {
  static Context = createContext(new AppState());
}
