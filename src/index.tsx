import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { AppState } from './state/AppState';
import { appBehavior } from './behaviors/appBehavior';

const state = new AppState();
appBehavior(state);
render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
