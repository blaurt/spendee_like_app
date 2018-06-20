import React from 'react';
import RecordCreate from "./newRecord";
import RecordsList from "./list";
import RecordEdit from "./edit";
import {Route, Switch} from "react-router-dom";
import {Links} from "../../utils/routerLinks";
import {withRouter} from "react-router-dom";

class Records extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={Links.newRecord} component={RecordCreate}/>
                    <Route path={Links.editRecord} component={RecordEdit}/>
                    <Route exact path={Links.recordList} component={RecordsList}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default withRouter(Records);