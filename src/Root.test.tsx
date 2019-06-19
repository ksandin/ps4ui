import * as React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';
import { State } from './state/State';

describe('App', () => {
  it('Can initialize without throwing errors', () => {
    const state = new State();
    const div = document.createElement('div');
    ReactDOM.render(<Root state={state} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
