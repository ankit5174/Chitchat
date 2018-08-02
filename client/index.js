import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/configureStore';
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './index.css';
//io.connect("http://localhost:3000");
// console.log(configureStore);
let store = configureStore();
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root'));