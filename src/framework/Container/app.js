import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Test from '../../component/test';
import {GET} from '../../lib/rest';
import './style/index.less';

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
    return (
      <BrowserRouter basename='/'>
        <Route path='/' render={this.renderContainer}/>
      </BrowserRouter>
    );
  }
  renderContainer = (props) => {
    console.log('====> ',props);
    if (props)
    return (
      <Test text={this.state.testData}/>
    );
  };
}
