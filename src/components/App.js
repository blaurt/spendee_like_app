import React from 'react'
import Header from '../common/components/Header'
import Main from './Main'
import Footer from "../common/components/Footer";
import * as recordActions from '../containers/records/actions/recordActionsCreators'
import * as categoryActions from '../containers/categories/actions/categoryActionsCreators'
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router";

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    records: state.records,
    categories: state.categories,
});


const mapDispatchToProps = (dispatch) => ({
    recordActions: bindActionCreators(recordActions, dispatch),
    categoryActions: bindActionCreators(categoryActions, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
