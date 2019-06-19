import styled, { AnyStyledComponent } from 'styled-components';

export type TransformerProps = { transform: string };

export const createTransformer = <C extends AnyStyledComponent>(
  component: C
) => styled(component)<TransformerProps>`
  transform: ${props => props.transform};
`;
