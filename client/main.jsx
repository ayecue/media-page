import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import reducers from './reducers/reducers';

import MainContainer from './container/Main.jsx';

import './styles/general.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" components={MainContainer} />
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
