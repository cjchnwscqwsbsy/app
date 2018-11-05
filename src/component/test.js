import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

class Test extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render(){
    const { prefix = 'xrk', text = 'dsfdf' } = this.props;
    return (
      <li className={`${prefix}-test`}>{text}</li>
    );
  }
}

Test.propTypes = {
  text:PropTypes.string.isRequired,
};

export default Test;
