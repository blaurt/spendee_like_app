import React from 'react'
import Header from './common/components/Header'
import Main from './containers/main'
import Footer from "./common/components/Footer";
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/App.css';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
};

export default App;