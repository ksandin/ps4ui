import { createContext } from 'react';
import { createDefaultTheme } from '../components/createDefaultTheme';

export class AppState {
  static Context = createContext(new AppState());
  theme = createDefaultTheme();
}
