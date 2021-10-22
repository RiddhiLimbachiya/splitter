import styled from 'styled-components';

import { hoverEffect } from 'lib/css-helpers/utility.css-helper';
import {
  $colorCyanShade2,
  $colorCyanShade4,
} from 'lib/constants/colors.constant';

export const Button = styled.button`
  padding: 1.2rem 2.4rem;
  width: 100%;
  border: none;
  background-color: ${$colorCyanShade2};
  color: ${$colorCyanShade4};
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
  ${hoverEffect}
`;

