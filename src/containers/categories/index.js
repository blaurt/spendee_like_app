import React from 'react';
import CategoryCreate from "./newCategory";
import CategoriesList from "./list";
import CategoryEdit from "./edit";
import {Route, Switch} from "react-router-dom";
import {Links} from "../../utils/routerLinks";
import {withRouter} from "react-router-dom";

class Categories extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={Links.newCategory} component={CategoryCreate}/>
                    <Route exact path={Links.categories} component={CategoriesList}/>
                    <Route path={Links.editCategory} component={CategoryEdit}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(Categories);