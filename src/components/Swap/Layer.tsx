import styled, { css } from 'styled-components';
import { Dock } from '../Dock';
import { SwapStyleFactory } from './SwapStyleFactory';
import { layerClass } from './layerClass';

export const Layer = styled(Dock)<{
  styleFactory: SwapStyleFactory;
}>(
  ({ styleFactory }) => css`
    &.${layerClass}-enter {
      ${styleFactory(false)};
    }
    &.${layerClass}-enter-active {
      ${styleFactory(true)};
    }
    &.${layerClass}-exit {
      ${styleFactory(true)};
    }
    &.${layerClass}-exit-active {
      ${styleFactory(false)};
    }
  `
);
