import * as React from 'react';
import { ImageCacheContext } from './ImageCacheContext';

export const useCachedImage = (src: string) => {
  const cache = React.useContext(ImageCacheContext);
  const [state, setState] = React.useState(unique(cache.get(src)));
  React.useEffect(
    () => cache.subscribe(src, updatedImage => setState(unique(updatedImage))),
    [cache, src]
  );
  return state.value;
};

const unique = <T extends any>(value: T) => ({ value });
