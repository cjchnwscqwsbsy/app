import React, {Component, Fragment} from 'react';
import './style/index.less';

export default class Container extends Component {
    render(){
        return (
            <div className={`app-container`}>
                <div className={`app-container-nav`}>
                    <span onClick={() => this.handleOnClick('Welcome')}>welcome</span>
                    <span onClick={() => this.handleOnClick('Dashboard')}>dashboard</span>
                </div>
                <div className={`app-container-body`}>content</div>
            </div>
        );
    }
    handleOnClick = (value) => {
        this.props.resetUrl && this.props.resetUrl(value);
    };
}
