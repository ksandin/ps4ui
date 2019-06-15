import * as React from 'react';
import { Typography, variants } from './Typography';

export const TypographyTest = () => (
  <>
    {variants.map(variant => (
      <Typography key={variant} variant={variant}>
        {variant}
      </Typography>
    ))}
  </>
);
