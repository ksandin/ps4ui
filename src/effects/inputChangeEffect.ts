import { InputId, InputState, ResponsiveGamepad } from 'responsive-gamepad';

export const inputChangeEffect = (handleInput: (state: InputState) => any) =>
  ResponsiveGamepad.onInputsChange(
    Object.keys(ResponsiveGamepad.RESPONSIVE_GAMEPAD_INPUTS) as InputId[],
    handleInput
  );
