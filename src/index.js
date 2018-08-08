import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store'


let deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
window.onresize = () => {
    let deviceWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                {Router()}
            </div>
        )
    }
}


// ReactDOM.render(Router(),document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
registerServiceWorker();
