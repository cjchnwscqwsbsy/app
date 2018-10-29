import React from 'react';
import PropTypes from 'prop-types';

const Test = ({text}) => <li style={{color:'red'}}>{text}</li>;

Test.propTypes = {
  text:PropTypes.string.isRequired,
};

export default Test;
