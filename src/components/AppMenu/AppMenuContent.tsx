import * as React from 'react';
import { Content } from '../../state/Content';
import styled from 'styled-components';

export type AppMenuContentProps = {
  app?: Content;
};

export const AppMenuContent: React.FC<AppMenuContentProps> = ({ app }) => (
  <Bounds>{app ? app.name : undefined}</Bounds>
);

const Bounds = styled.div``;
