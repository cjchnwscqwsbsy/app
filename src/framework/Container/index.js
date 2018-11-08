import React, {Component, Fragment} from 'react';
import * as Com from '../index';
import './style/index.less';

export default class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCom:'Welcome',
        };
    }
    render(){
        const { renderCom } = this.state;
        return (
            <div className={`app-container`}>
                <div className={`app-container-nav`}>
                    <span onClick={() => this.handleOnClick('Welcome')}>welcome</span>
                    <span onClick={() => this.handleOnClick('DashBoard')}>dashboard</span>
                </div>
                <div className={`app-container-body`}>
                    {this.getObj(renderCom)}
                </div>
            </div>
        );
    }
    handleOnClick = (value) => {
        this.setState({
            renderCom:value,
        });
    };
    getObj = (value) => {
        console.log(Com,'asd:',Com[value]);
        const Compoent = Com[value];
        return <Compoent/>;
    };
}
