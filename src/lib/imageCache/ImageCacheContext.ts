import { createContext } from 'react';
import { ImageCache } from './ImageCache';

export const ImageCacheContext = createContext(new ImageCache());
