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
  componentWillReceiveProps(nextProps){
    debugger
  }
  render(){
    return (
      <BrowserRouter>
        <Fragment>
          <div className={`xrk-links`}>
            <NavLink exact className={`xrk-links-item`} activeClassName={`selected`} to='/'>home</NavLink>
            <NavLink className={`xrk-links-item`} activeClassName={`selected`} to='/home'>home2</NavLink>
            <NavLink className={`xrk-links-item`} activeClassName={`selected`} to='/xrk'>home3</NavLink>
          </div>
          <Route exact path='/' component={() => <Test text={this.state.testData}/>}/>
          <Route path='/home' render={this.renderRoute}/>
          <Route path='/xrk' component={() => <Test text={this.state.testData}/>}/>
        </Fragment>
      </BrowserRouter>
    );
  }
  renderRoute = (props) => {
    console.log('====> ',props);
    return (
      <Test text={this.state.testData}/>
    );
  };
}
