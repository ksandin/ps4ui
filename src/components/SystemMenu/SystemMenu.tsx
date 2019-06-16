import * as React from 'react';
import { Amazon } from 'styled-icons/icomoon';
import { Airbnb, Angular, Apple } from 'styled-icons/fa-brands';
import { Android } from 'styled-icons/material';
import { Baidu } from 'styled-icons/boxicons-logos';
import { SystemMenuItem } from './SystemMenuItem';
import { Row } from '../Row';
import styled from 'styled-components';

export const SystemMenu = () => (
  <StyledRow>
    <SystemMenuItem icon={Airbnb} name="Airbnb" />
    <SystemMenuItem icon={Amazon} name="Amazon" />
    <SystemMenuItem icon={Android} name="Android" />
    <SystemMenuItem icon={Apple} name="Apple" />
    <SystemMenuItem icon={Angular} name="Angular" />
    <SystemMenuItem icon={Baidu} name="Baidu" />
  </StyledRow>
);

const StyledRow = styled(Row)`
  & > * {
    width: ${100 / 6}%;
  }
`;
