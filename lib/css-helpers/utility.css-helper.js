import { css } from 'styled-components';

import {
  $colorCyanShade3,
  $colorCyanShade4,
} from 'lib/constants/colors.constant';

export const hoverEffect = css`
  & :hover {
    background-color: ${$colorCyanShade3};
    color: ${$colorCyanShade4};
  }
`;
