import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { AppState } from '../state/AppState';
import { appBehavior } from '../behaviors/appBehavior';

const state = new AppState();
appBehavior(state);
render(<App state={state} />, document.getElementById('root'));
