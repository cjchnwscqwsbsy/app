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
    restAjax('http://127.0.0.1:8080').then(ret => {
      console.log('rkxie:',ret);
      this.setState({
         testData:ret,
      });
    });
  }
  render(){
    return (<Test text={this.state.testData}/>);
  }
}
