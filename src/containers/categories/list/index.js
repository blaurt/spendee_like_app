import React from 'react';
import {withRouter} from "react-router-dom";
import {Links, buildUrl} from "../../../utils/routerLinks";
import {connect} from "react-redux";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from "@fortawesome/fontawesome-free-solid/index";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {deleteCategory} from "../../categories/actions/categoryActionsCreators";

class List extends React.Component {

    static propTypes = {
        categories: PropTypes.array
    };

    static defaultProps = {
        categories: [],
    };

    render() {
        const {history, categories, removeCategory} = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="h1 text-center p-3">All Categories</div>

                {/*Redirect to addCategories screen*/}
                <button className="btn btn-dark m-3"
                        onClick={() => history.push((Links.newCategory))}
                >
                    New category
                </button>

                {
                    !!categories.length
                        ?
                        <table className="table table-striped">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map((category, index) => {
                                    console.log(category);
                                    return (
                                        <tr key={category.timestamp}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                            <td className={"action-bar"}>
                                                <FontAwesomeIcon icon={faEdit}
                                                                 onClick={() => history.push(buildUrl(Links.editCategory, {id: index}))}
                                                />
                                                <FontAwesomeIcon icon={faTrash}
                                                                 onClick={() => removeCategory(index)}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        :
                        <div className="h1 text-center p-3">Sorry, there are no categories. Try to add one</div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({categories}) => ({categories});
const mapDispatchToProps = (dispatch) => ({removeCategory: bindActionCreators(deleteCategory, dispatch)});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
