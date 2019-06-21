import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { fonts } from '../assets/fonts';

const Shevy = require('shevyjs').default;

const shared = css`
  color: ${props => props.theme.colors.main};
  font-family: ${fonts.Default};
`;

export type TypographyProps = React.HTMLAttributes<{}> & {
  variant?: TypographyVariant;
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  ...props
}) => React.createElement(components[variant], props);

export const shevy = new Shevy();

const pick = (tag: string) => {
  const obj = { ...shevy[tag] };
  delete obj.margin;
  delete obj.marginBottom;
  return css`
    ${shared} ${obj}
  `;
};

export const components = {
  h1: styled.h1`
    ${pick('h1')}
  `,
  h2: styled.h2`
    ${pick('h2')}
  `,
  h3: styled.h3`
    ${pick('h3')}
  `,
  h4: styled.h4`
    ${pick('h4')}
  `,
  h5: styled.h5`
    ${pick('h5')}
  `,
  h6: styled.h6`
    ${pick('h6')}
  `,
  p: styled.p`
    ${pick('content')}
  `,
  ol: styled.ol`
    ${pick('content')}
  `,
  ul: styled.ul`
    ${pick('content')}
  `,
  pre: styled.pre`
    ${pick('content')}
  `
};

export const variants: TypographyVariant[] = Object.keys(components) as any;

export type TypographyVariant = keyof typeof components;
