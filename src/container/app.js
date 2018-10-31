import React, {Component} from 'react';
import Test from '../component/test';
import {GET} from '../lib/rest';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      testData:'hello world!',
    };
  }
  componentDidMount(){
    GET('home').then(ret => {
      console.log(ret);
      this.setState({
         testData:ret.data['meg'],
      });
    });
  }
  render(){
    return (<Test text={this.state.testData}/>);
  }
}
