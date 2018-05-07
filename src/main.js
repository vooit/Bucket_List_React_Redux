import './assets/scss/app.scss';
console.log('Its working just fine');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createLogger} from 'redux-logger';

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducers';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(createLogger()))


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));