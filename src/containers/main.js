import React from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import RecordsTab from './records/index';
import CategoriesTab from './categories/index';
import NotFound from '../containers/notFound/notFound';
import {Links} from "../utils/routerLinks";
import About from "./about";
import Home from './home'

const Main = () => (
    <main>
        <div className="container">
            <Switch>
                <Route exact path={Links.home} component={Home}/>
                <Route path={Links.records} component={RecordsTab}/>
                <Route path={Links.categories} component={CategoriesTab}/>
                <Route path={Links.about} component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </main>
);

export default withRouter(Main);
