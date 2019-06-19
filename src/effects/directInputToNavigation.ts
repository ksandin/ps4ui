import { InputState } from 'responsive-gamepad';
import { Spatial } from '../lib/spatial/Spatial';

export const directInputToNavigation = (input: InputState, nav: Spatial) => {
  if (input.DPAD_UP) {
    nav.move('up');
  }
  if (input.DPAD_RIGHT) {
    nav.move('right');
  }
  if (input.DPAD_DOWN) {
    nav.move('down');
  }
  if (input.DPAD_LEFT) {
    nav.move('left');
  }
};
