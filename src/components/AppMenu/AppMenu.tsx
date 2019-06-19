import * as React from 'react';
import { math } from 'polished';
import { AppMenuItem } from './AppMenuItem';
import { Row } from '../Row';
import styled from 'styled-components/macro';
import {
  BowlingBall,
  BreadSlice,
  Broom,
  CandyCane,
  Cat,
  Coins,
  Comments,
  CompactDisc
} from 'styled-icons/fa-solid';
import { CheckCircle, Cloud, Settings } from 'styled-icons/feather';
import { createTransformer } from './createTransformer';
import { useRowOffset } from './useRowOffset';

export const AppMenu = () => {
  const rowRef = React.useRef<HTMLDivElement>(null);
  return useRowOffset(rowRef, offset => (
    <SlidingAppMenuRow ref={rowRef} transform={`translate(${offset}px)`}>
      <AppMenuItem icon={BowlingBall} name="BowlingBall" />
      <AppMenuItem icon={BreadSlice} name="BreadSlice" />
      <AppMenuItem icon={Broom} name="Broom" />
      <AppMenuItem icon={CandyCane} name="CandyCane" />
      <AppMenuItem icon={Cat} name="Cat" />
      <AppMenuItem icon={CheckCircle} name="CheckCircle" />
      <AppMenuItem icon={Cloud} name="Cloud" />
      <AppMenuItem icon={Coins} name="Coins" />
      <AppMenuItem icon={Comments} name="Comments" />
      <AppMenuItem icon={CompactDisc} name="CompactDisc" />
      <AppMenuItem icon={Settings} name="Settings" />
    </SlidingAppMenuRow>
  ));
};

const AppMenuRow = styled(Row)`
  & > * {
    width: ${props => math(`${props.theme.unit} * 50`)};
    &:not(:last-child) {
      margin-right: ${props => props.theme.unit};
    }
  }
`;

const SlidingAppMenuRow = createTransformer(AppMenuRow);
