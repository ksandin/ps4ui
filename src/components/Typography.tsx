import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../assets/fonts';

const Shevy = require('shevyjs').default;

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
    font-family: ${fonts.Default};
    ${shevy.h1}
  `,
  h2: styled.h2`
    font-family: ${fonts.Default};
    ${shevy.h2}
  `,
  h3: styled.h3`
    font-family: ${fonts.Default};
    ${shevy.h3}
  `,
  h4: styled.h4`
    font-family: ${fonts.Default};
    ${shevy.h4}
  `,
  h5: styled.h5`
    font-family: ${fonts.Default};
    ${shevy.h5}
  `,
  h6: styled.h6`
    font-family: ${fonts.Default};
    ${shevy.h6}
  `,
  p: styled.p`
    font-family: ${fonts.Default};
    ${shevy.content}
  `,
  ol: styled.ol`
    font-family: ${fonts.Default};
    ${shevy.content}
  `,
  ul: styled.ul`
    font-family: ${fonts.Default};
    ${shevy.content}
  `,
  pre: styled.pre`
    font-family: ${fonts.Default};
    ${shevy.content}
  `
};

export const variants: TypographyVariant[] = Object.keys(components) as any;

export type TypographyVariant = keyof typeof components;
