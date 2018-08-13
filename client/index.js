// require("babel-polyfill");
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/lib/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';

import './index.css';
import Loading from './components/loading/loading';
import {persistor, store, history} from "./redux/configureStore";
import App from './App';

ReactDOM.render(<Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));