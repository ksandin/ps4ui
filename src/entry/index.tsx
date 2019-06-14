import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { AppState } from '../state/AppState';

const state = new AppState();
render(<App state={state} />, document.getElementById('root'));
