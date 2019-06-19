import * as React from 'react';
import { Amazon } from 'styled-icons/icomoon';
import { Airbnb, Angular, Apple } from 'styled-icons/fa-brands';
import { Android } from 'styled-icons/material';
import { Baidu } from 'styled-icons/boxicons-logos';
import { SystemMenuItem } from './SystemMenuItem';
import { Row } from '../Row';
import styled from 'styled-components/macro';

export const SystemMenu = () => (
  <SystemMenuRow>
    <SystemMenuItem icon={Airbnb} name="Airbnb" />
    <SystemMenuItem icon={Amazon} name="Amazon" />
    <SystemMenuItem icon={Android} name="Android" />
    <SystemMenuItem icon={Apple} name="Apple" />
    <SystemMenuItem icon={Angular} name="Angular" />
    <SystemMenuItem icon={Baidu} name="Baidu" />
  </SystemMenuRow>
);

const SystemMenuRow = styled(Row)`
  & + & {
    margin-top: 10px;
  }
  & > * {
    flex: 1;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
