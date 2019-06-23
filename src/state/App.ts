import { Content } from './Content';

export type App = Content & {
  imageUrl: string;
  action: string;
};
