import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AppState } from './state/AppState';

describe('App', () => {
  it('Can initialize without throwing errors', () => {
    const state = new AppState();
    const div = document.createElement('div');
    ReactDOM.render(<App state={state} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
