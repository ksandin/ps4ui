export const timeEffect = (
  emitTime: (time: Date) => any,
  interval: number = 1000
) => {
  const emit = () => emitTime(new Date());
  const handle = setInterval(emit, interval);
  emit();
  return () => clearInterval(handle);
};
