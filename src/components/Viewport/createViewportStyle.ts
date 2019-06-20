import { Size } from '../../state/Size';

const viewportSize = {
  width: 1920,
  height: 1080
};

/**
 * Returns the css properties required to size, scale and translate an
 * html element into a centered 1080p box that fits into the specified window size.
 * @param windowSize
 */
export function createViewportStyle(windowSize: Size) {
  const xRatio = viewportSize.width / windowSize.width;
  const yRatio = viewportSize.height / windowSize.height;
  const bestRatio = Math.max(xRatio, yRatio);
  const scale = 1 / bestRatio;
  const xOffset = Math.max(
    0,
    (windowSize.width - viewportSize.width * scale) / 2
  );
  const yOffset = Math.max(
    0,
    (windowSize.height - viewportSize.height * scale) / 2
  );
  return {
    ...viewportSize,
    transformOrigin: '0 0',
    transform: `translate(${xOffset}px, ${yOffset}px) scale(${scale})`,
    overflow: 'hidden'
  };
}
