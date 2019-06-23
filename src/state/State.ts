import { createContext } from 'react';
import { createDefaultTheme } from '../components/createDefaultTheme';
import { UIStore } from './UIStore';
import { Spatial } from '../lib/spatial/Spatial';
import { action, observable } from 'mobx';
import { ImageCache } from '../lib/imageCache/ImageCache';
import { System } from './System';
import { App } from './App';

export class State {
  ui = new UIStore();
  theme = createDefaultTheme();
  spatial = new Spatial();
  images = new ImageCache();
  @observable systems: System[] = [];
  @observable apps: App[] = [];

  @action setApps(apps: App[]) {
    this.apps = apps;
  }

  @action setSystems(systems: System[]) {
    this.systems = systems;
  }
}

export const StateContext = createContext(new State());
