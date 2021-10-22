import styled, { css } from 'styled-components';

import { mq } from 'lib/css-helpers/mixins.css-helper';
import { hoverEffect } from 'lib/css-helpers/utility.css-helper';
import {
  $colorCyanShade2,
  $colorCyanShade4,
  $colorCyanShade5,
  $colorWhiteShade1,
} from 'lib/constants/colors.constant';

export const SectionSplitter = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq.tablet`
    height: auto;
  `}
  ${mq.phone`
    height:auto;
  `}
`;

export const TipBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.2rem;
  gap: 8rem;
  justify-content: center;
  width: 100%;
  ${mq.phone`
    padding: 4.2rem 0;
  `}
`;

export const LogoBox = styled.div`
  width: 9.6rem;
  height: 5.6rem;
  position: relative;
`;

export const TipContent = styled.div`
  padding: 2.4rem;
  background-color: ${$colorWhiteShade1};
  border-radius: 18px;
  ${mq.phone`
    padding: 3.6rem;
  `}
`;

export const SelectAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.4rem;
  gap: 4.8rem;
`;

export const SelectTip = styled.div`
  width: 100%;
  & label {
    margin-bottom: 2.4rem;
  }
`;

export const TipPercentBox = styled.div`
  padding: 1.2rem 2.4rem;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${hoverEffect}

  ${props => {
    if (props.isActive) {
      return css`
        background-color: ${$colorCyanShade2};
        color: ${$colorCyanShade4};
      `;
    } else {
      return css`
        background-color: ${$colorCyanShade4};
        color: ${$colorCyanShade5};
      `;
    }
  }}
`;

export const TipCustomTextBox = styled.div`
  width: 12rem;
  & input {
    text-align: center;
  }
  ${mq.phone`
    width: 15rem;
  `}
`;

export const CheckAmount = styled.div`
  background-color: ${$colorCyanShade4};
  border-radius: 9px;
  color: ${$colorCyanShade5};
  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  ${mq.phone`
    padding: 2.4rem;
  `}
`;

export const AmountBox = styled.div`
  display: flex;
  gap: 9.6rem;
  margin-bottom: 6.4rem;
  justify-content: space-between;
`;

export const AmountLabel = styled.p`
  font-size: 1.6rem;
  color: ${$colorCyanShade5};
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

export const AmountPerPerson = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${$colorCyanShade2};
`;

export const Amount = styled.p`
  font-weight: 500;
  font-size: 4.4rem;
  color: ${$colorCyanShade2};
`;

export const ResetBtn = styled.div`
  margin-top: auto;
  width: 100%;
`;
