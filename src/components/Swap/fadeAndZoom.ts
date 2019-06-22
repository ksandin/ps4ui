import { css } from 'styled-components';
import { activationTransition } from '../../css/transitions';

export const fadeAndZoom = (visible: boolean) => css`
  ${activationTransition('opacity', 'transform')};
  opacity: ${visible ? 1 : 0};
  transform: perspective(100px)
    translate3d(0, ${visible ? 0 : '5%'}, ${visible ? 0 : '-5px'});
`;
