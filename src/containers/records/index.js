import React from 'react';
import NewRecord from "./newRecord";
import List from "./list";

export default class Records extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link " id="home-tab" data-toggle="tab" href="#list" role="tab">List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#add" role="tab">Add</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#edit" role="tab">Edit</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade " id="list" role="tabpanel">
                        <div className="h1 text-center p-3">All records</div>
                        <List/>
                    </div>
                    <div className="tab-pane fade show active" id="add" role="tabpanel">
                        <div className="h1 text-center p-3">New record</div>
                        <NewRecord/>
                    </div>
                    <div className="tab-pane fade" id="edit" role="tabpanel">
                        <div className="h1 text-center p-3">Edit record</div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}