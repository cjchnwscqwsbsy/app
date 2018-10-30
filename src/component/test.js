import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render(){
    return (
      <li style={{color:'red'}}>{this.props.text}</li>
    );
  }
}

Test.propTypes = {
  text:PropTypes.string.isRequired,
};

export default Test;
