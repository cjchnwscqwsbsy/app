import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

class Test extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render(){
    const { prefix = 'xrk' } = this.props;
    return (
      <li className={`${prefix}-test`}>{this.props.text}</li>
    );
  }
}

Test.propTypes = {
  text:PropTypes.string.isRequired,
};

export default Test;
