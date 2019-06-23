import { ImageCache } from './ImageCache';

const reliableSource = 'https://picsum.photos/200/300';

describe('imageCache', () => {
  it('can get an image instance', () => {
    const source = reliableSource;
    const cache = new ImageCache();
    const image = cache.get(source);
    expect(image).toBeDefined();
  });
  it('gets an unloaded image on the first use of a source', () => {
    const source = reliableSource;
    const cache = new ImageCache();
    const image = cache.get(source);
    expect(image.complete).not.toBe(true);
  });
  it('gets the same image instance when using previously used source', () => {
    const source = reliableSource;
    const cache = new ImageCache();
    const image1 = cache.get(source);
    const image2 = cache.get(source);
    expect(image1).toBe(image2);
  });
});
