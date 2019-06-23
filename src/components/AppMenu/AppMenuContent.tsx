import styled from 'styled-components';
import { Swap } from '../Swap/Swap';
import { math } from 'polished';

export const AppMenuContent = styled(Swap)`
  width: 100%;
  min-height: 50%;
  margin-top: ${props => math(`${props.theme.unit} * 7`)};
`;
