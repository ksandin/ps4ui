import { InputState, ResponsiveGamepad } from 'responsive-gamepad';
import { inputChangeEffect } from './inputChangeEffect';

export function inputEffect(handleInput: (state: InputState) => any) {
  const stopListeningToChanges = inputChangeEffect(handleInput);
  ResponsiveGamepad.enable();
  return () => {
    stopListeningToChanges();
    ResponsiveGamepad.disable();
  };
}
