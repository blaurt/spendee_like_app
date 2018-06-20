import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App';

import store from "./utils/store";
import {Provider} from "react-redux";

import './styles/style.css'

render((
    <Provider store={store}>
        <BrowserRouter >
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
