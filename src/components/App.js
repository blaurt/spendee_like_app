import React from 'react'
import Header from '../common/components/Header'
import Main from './Main'
import Footer from "../common/components/Footer";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const App = () => (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
);

export default App
