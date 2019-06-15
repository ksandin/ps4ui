import * as React from 'react';
import styled from 'styled-components';
const Shevy = require('shevyjs').default;

export type TypographyProps = React.HTMLAttributes<{}> & {
  variant?: TypographyVariant;
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  ...props
}) => {
  const Component = components[variant];
  return <Component {...props} />;
};

export const shevy = new Shevy();

export const components = {
  h1: styled.h1`
    ${shevy.h1}
  `,
  h2: styled.h2`
    ${shevy.h2}
  `,
  h3: styled.h3`
    ${shevy.h3}
  `,
  h4: styled.h4`
    ${shevy.h4}
  `,
  h5: styled.h5`
    ${shevy.h5}
  `,
  h6: styled.h6`
    ${shevy.h6}
  `,
  p: styled.p`
    ${shevy.content}
  `,
  ol: styled.ol`
    ${shevy.content}
  `,
  ul: styled.ul`
    ${shevy.content}
  `,
  pre: styled.pre`
    ${shevy.content}
  `
};

export const variants: TypographyVariant[] = Object.keys(components) as any;

export type TypographyVariant = keyof typeof components;
