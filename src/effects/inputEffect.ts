import { InputId, InputState, ResponsiveGamepad } from 'responsive-gamepad';

export function inputEffect(handleInput: (state: InputState) => any) {
  const stopListeningToChanges = ResponsiveGamepad.onInputsChange(
    Object.keys(ResponsiveGamepad.RESPONSIVE_GAMEPAD_INPUTS) as InputId[],
    handleInput
  );
  ResponsiveGamepad.enable();
  return () => {
    stopListeningToChanges();
    ResponsiveGamepad.disable();
  };
}
