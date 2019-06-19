import React from 'react';
import { render } from 'react-dom';
import { Root } from './Root';
import * as serviceWorker from './serviceWorker';
import { State } from './state/State';
import { appEffects } from './effects/appEffects';

const state = new State();
appEffects(state);
render(<Root state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
