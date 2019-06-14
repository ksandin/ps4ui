import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { App } from './App';
import { AppState } from '../state/AppState';

describe('App', () => {
  it('Can initialize without throwing errors', () => {
    const state = new AppState();
    expect(() => renderer.create(<App state={state} />)).not.toThrow();
  });
});
