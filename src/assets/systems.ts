import { Airbnb, Angular, Apple } from 'styled-icons/fa-brands';
import { Amazon, Dice } from 'styled-icons/icomoon';
import { Android } from 'styled-icons/material';
import { Baidu } from 'styled-icons/boxicons-logos';
import { CookieBite, Cube, Dog } from 'styled-icons/fa-solid';
import {
  generateDummyComponent2,
  generateInfoComponent
} from './generateDummyComponent';
import { System } from '../state/System';

export const systems: System[] = [
  {
    icon: Airbnb,
    name: 'Airbnb',
    component: generateDummyComponent2('Airbnb', 'left')
  },
  {
    icon: Amazon,
    name: 'Amazon',
    component: generateDummyComponent2('Amazon', 'right'),
    info: generateInfoComponent('Lorem ipsum dolor sit amet.')
  },
  {
    icon: Android,
    name: 'Android',
    component: generateDummyComponent2('Android', 'left')
  },
  {
    icon: Apple,
    name: 'Apple',
    component: generateDummyComponent2('Apple', 'right'),
    hideWhenInactive: true
  },
  {
    icon: Angular,
    name: 'Angular',
    component: generateDummyComponent2('Angular', 'left')
  },
  {
    icon: Baidu,
    name: 'Baidu',
    component: generateDummyComponent2('Baidu', 'right'),
    hideWhenInactive: true
  },
  {
    icon: CookieBite,
    name: 'CookieBite',
    component: generateDummyComponent2('CookieBite', 'left'),
    info: generateInfoComponent('Hello World')
  },
  {
    icon: Cube,
    name: 'Cube',
    component: generateDummyComponent2('Cube', 'right'),
    hideWhenInactive: true
  },
  {
    icon: Dice,
    name: 'Dice',
    component: generateDummyComponent2('Dice', 'left')
  },
  {
    icon: Dog,
    name: 'Doggos',
    component: generateDummyComponent2('Doggos', 'right'),
    hideWhenInactive: true
  }
];
