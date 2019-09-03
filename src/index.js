import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Store, { persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Components/Routes';

ReactDOM.render(
    <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>
, document.getElementById('root'));
