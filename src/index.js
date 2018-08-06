import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store'


var deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // const { sharedNum, expectedIncome, canUse } = this.props
        return (
            <div className="profile_invite_income">
                {Router()}
            </div>
        )
    }
}


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
// ReactDOM.render(Router(), document.getElementById('root'));
registerServiceWorker();
