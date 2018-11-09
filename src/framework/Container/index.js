import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {GET} from "../../lib/rest";
import * as Com from '../index';
import './style/index.less';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            testData:'hello world!',
            navMenu:[],
        };
    }
    componentDidMount(){
        GET('navmenu').then(ret => {
            console.log('safouhuih:',ret);
            this.setState({
                // testData:ret[0].data['meg'],
                navMenu:ret['menuList']
            });
        });
    }
    render(){
        return (
            <BrowserRouter basename='/xrk'>
                <div className={`app-container`}>
                    <div className={`app-container-nav`}>
                        <NavLink to='/'>Welcome</NavLink>
                        <NavLink to='/DashBoard/MenuShort'>MenuShort</NavLink>
                        <NavLink to='/DashBoard/PublicVersion'>PublicVersion</NavLink>
                    </div>
                    <div className={`app-container-body`}>
                        <Route path='/' render={this.renderRoute}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
    renderRoute = (props) => {
        const page = props.location.pathname.split('/').filter(fit => fit !== '');
        return this.renderCom(page);
    };
    renderCom = (value) => {
        if (value.length) {
            let Compoent = Com;
            value.forEach(item => {
                console.log('====> ',item);
                Compoent = Compoent[item]
            });
            return <Compoent/>;
        }
        const Compoent = Com['Welcome'];
        return <Compoent/>;
    };
}
