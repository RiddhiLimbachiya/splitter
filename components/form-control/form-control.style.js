import styled, { css } from 'styled-components';

import {
  $colorCyanShade4,
  $colorCyanShade5,
  $colorCyanShade7,
  $colorRedShade1,
  $colorRedShade2,
} from 'lib/constants/colors.constant';

export const FormControl = styled.div`
  width: 100%;
  color: ${$colorCyanShade4};
`;

export const StyledInput = styled.input`
  padding: 1.2rem;
  border: none;
  background-color: ${$colorCyanShade5};
  border-radius: 5px;
  width: 100%;
  font-size: 1.8rem;
  font-family: inherit;
  color: inherit;
  font-weight: 700;
  & :focus {
    ${props => {
      if (props.isInvalid) {
        return css`
          box-shadow: 0 0 0 0.3rem ${$colorRedShade2};
        `;
      } else {
        return css`
          box-shadow: 0 0 0 0.3rem ${$colorCyanShade7};
        `;
      }
    }}
  }

  ${props => {
    if (props.isActive) {
      return css`
        box-shadow: 0 0 0 0.3rem ${$colorCyanShade7};
      `;
    }
  }}
`;

export const Error = styled.p`
  margin-top: 1.2rem;
  font-size: 1.2rem;
  color: ${$colorRedShade1};
  text-align: end;
`;
