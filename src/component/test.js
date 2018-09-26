import React from 'react';
import PropTypes from 'prop-types';

export const Test = (text) => <li>{text}</li>;

Test.propTypes = {
  text:PropTypes.string.isRequired,
};