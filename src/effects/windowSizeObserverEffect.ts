export const windowSizeObserverEffect = (emitSize: WindowSizeEmitter) => {
  const emit = () =>
    emitSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

  emit();
  window.addEventListener('resize', emit);

  return () => window.removeEventListener('resize', emit);
};

type WindowSizeEmitter = (size: Size) => any;

type Size = { width: number; height: number };
