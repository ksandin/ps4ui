import { createContext } from 'react';
import { createDefaultTheme } from '../components/createDefaultTheme';
import { UIStore } from './UIStore';
import { Spatial } from '../lib/spatial/Spatial';

export class State {
  ui = new UIStore();
  theme = createDefaultTheme();
  spatial = new Spatial();

  static Context = createContext(new State());
}
