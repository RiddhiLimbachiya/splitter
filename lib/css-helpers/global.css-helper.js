import { createGlobalStyle } from 'styled-components';

import { mq } from 'lib/css-helpers/mixins.css-helper';
import { $colorCyanShade7 } from 'lib/constants/colors.constant';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  ${mq.tablet`
    font-size: 56.25%;
  `}
  ${mq.phone`
    font-size: 50%;
  `}
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.3rem ${$colorCyanShade7};
}

body {
  font-family: 'Rubik', sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}
`;

export default GlobalStyles;
