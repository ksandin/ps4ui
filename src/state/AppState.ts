import { createContext } from 'react';
import { createDefaultTheme } from '../components/createDefaultTheme';
import { UIStore } from './UIStore';

export class AppState {
  ui = new UIStore();
  theme = createDefaultTheme();

  static Context = createContext(new AppState());
}
