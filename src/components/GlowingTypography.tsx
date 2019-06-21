import styled from 'styled-components';
import { Typography } from './Typography';

const c = `rgba(255,255,255, 0.7)`;
export const GlowingTypography = styled(Typography)`
  text-shadow: 0 0 1px ${c}, 0 0 2px ${c}, 0 0 3px ${c}, 0 0 4px ${c},
    0 0 7px ${c}, 0 0 8px ${c}, 0 0 10px ${c}, 0 0 15px ${c};
`;
