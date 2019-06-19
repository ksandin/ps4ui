import * as React from 'react';
import styled from 'styled-components/macro';
import { fonts } from '../assets/fonts';

const Shevy = require('shevyjs').default;

const shared = `
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

export const components = {
  h1: styled.h1`
    ${shared} ${shevy.h1}
  `,
  h2: styled.h2`
    ${shared} ${shevy.h2}
  `,
  h3: styled.h3`
    ${shared} ${shevy.h3}
  `,
  h4: styled.h4`
    ${shared} ${shevy.h4}
  `,
  h5: styled.h5`
    ${shared} ${shevy.h5}
  `,
  h6: styled.h6`
    ${shared} ${shevy.h6}
  `,
  p: styled.p`
    ${shared} ${shevy.content}
  `,
  ol: styled.ol`
    ${shared} ${shevy.content}
  `,
  ul: styled.ul`
    ${shared} ${shevy.content}
  `,
  pre: styled.pre`
    ${shared} ${shevy.content}
  `
};

export const variants: TypographyVariant[] = Object.keys(components) as any;

export type TypographyVariant = keyof typeof components;
