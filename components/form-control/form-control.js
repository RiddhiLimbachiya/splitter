import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { FormControl, StyledInput, Error } from './form-control.style';
import { $colorGrayShade1 } from 'lib/constants/colors.constant';

export const StyledLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: ${$colorGrayShade1};
`;

export const TextField = React.forwardRef((props, ref) => {
  return (
    <>
      <FormControl>
        {props.label && (
          <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
        )}
        <StyledInput {...props} id={props.id} ref={ref} />
        {props.error && props.touched && <Error>{props.error}</Error>}
      </FormControl>
    </>
  );
});

// EsLint gives error if react component created this way, to fix that we need to add display name to component or disable this rule.
// Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md

TextField.displayName = 'TextField';

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export const TextFieldWithIcon = styled(TextField)`
  background-repeat: no-repeat;
  background-position: 20px;
  text-align: right;
  ${props => {
    return css`
      background-image: url(${props.icon});
    `;
  }}
`;
