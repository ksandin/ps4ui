import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as React from 'react';
import { TransitionGroupProps } from 'react-transition-group/TransitionGroup';
import { layerClass } from './layerClass';
import { Layer } from './Layer';
import { fadeAndZoom } from './fadeAndZoom';
import { SwapStyleFactory } from './SwapStyleFactory';

export type SwapKey = string | number | undefined;

export type SwapProps = Omit<TransitionGroupProps, 'component'> & {
  swapKey?: SwapKey;
  styleFactory?: SwapStyleFactory;
};

export const Swap: React.FC<SwapProps> = ({
  swapKey = '',
  styleFactory = defaultStyleFactory,
  children,
  className,
  style
}) => (
  <TransitionGroup className={className} style={style}>
    {[
      <CSSTransition
        key={swapKey}
        timeout={undefined as any}
        classNames={layerClass}
        addEndListener={addEndListener}
      >
        <Layer styleFactory={styleFactory}>{children}</Layer>
      </CSSTransition>
    ]}
  </TransitionGroup>
);

const defaultStyleFactory = fadeAndZoom;

const addEndListener = (node: HTMLElement, done: () => any) =>
  node.addEventListener('transitionend', done, false);
