import { createContext } from 'react';
import { createDefaultTheme } from '../components/createDefaultTheme';
import { UIStore } from './UIStore';
import { Spatial } from '../lib/spatial/Spatial';
import { Content } from './Content';
import { action, observable } from 'mobx';

export class State {
  ui = new UIStore();
  theme = createDefaultTheme();
  spatial = new Spatial();
  @observable systems: Content[] = [];
  @observable apps: Content[] = [];

  @action setApps(apps: Content[]) {
    this.apps = apps;
  }

  @action setSystems(systems: Content[]) {
    this.systems = systems;
  }
}

export const StateContext = createContext(new State());
