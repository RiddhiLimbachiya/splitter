import styled from 'styled-components';

import { mq } from 'lib/css-helpers/mixins.css-helper';
import { $colorCyanShade1 } from 'lib/constants/colors.constant';

export const Container = styled.div`
  max-width: 150rem;
  width: 100%;
  background-color: ${$colorCyanShade1};
  display: flex;
  justify-content: center;

  ${mq.desktop`
    height: 100%;
  `}
`;

