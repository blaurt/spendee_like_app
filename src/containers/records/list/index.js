import React from 'react';
import {withRouter} from "react-router-dom";
import {Links} from "../../../utils/routerLinks";
import {connect} from "react-redux";
import ListItem from "./item/Item";
import PropTypes from 'prop-types';

class List extends React.Component {

    static propTypes = {
        records: PropTypes.array
    };

    static defaultProps = {
        records: [],
    };

    render() {
        const {history, records} = this.props;
        return (
            <React.Fragment>
                <div className="h1 text-center p-3">All records</div>

                {/*Redirect to addRecord screen*/}
                <button className="btn btn-dark m-3"
                        onClick={() => history.push((Links.newRecord))}
                >
                    New record
                </button>

                {
                    !!records.length
                        ?
                        <table className="table table-striped">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                                <th scope="col">Category</th>
                                <th scope="col">Sum</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                records.map((record, index) => {
                                    return (
                                        <ListItem record={{...record}}
                                                  key={record.timestamp}
                                                  index={index}
                                        />
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        :
                        <div className="h1 text-center p-3">Sorry, there are no records. Try to add one</div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({records}) => ({records});
export default connect(mapStateToProps)(withRouter(List));
