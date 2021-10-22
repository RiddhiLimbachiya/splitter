import styled from 'styled-components';

import { mq } from 'lib/css-helpers/mixins.css-helper';
import { Grid } from './grid.style';

export const Grid2Cols = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  ${mq.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const Grid3Cols = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  ${mq.phone`
    grid-template-columns: 1fr 1fr;
  `}
`;
