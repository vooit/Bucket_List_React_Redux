import './assets/scss/app.scss';
console.log('Its working just fine');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
// import rootReducer from './reducers';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>, document.getElementById('app'));