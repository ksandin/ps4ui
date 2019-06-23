import styled from 'styled-components/macro';
import { HTMLAttributes } from 'react';

export type RowProps = HTMLAttributes<HTMLDivElement>;

export const Row = styled.div<RowProps>`
  flex-direction: row;
`;
