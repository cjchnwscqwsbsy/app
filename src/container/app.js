import React, {Component} from 'react';
import Test from '../component/test';
import {restAjax} from '../component/rest';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      testData:'hello world!',
    };
  }
  componentDidMount(){
    restAjax('http://192.168.64.43:9000/xrk/home').then(ret => {
      this.setState({
         testData:ret['meg'],
      });
    });
  }
  render(){
    return (<Test text={this.state.testData}/>);
  }
}
