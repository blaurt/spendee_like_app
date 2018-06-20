import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {createCategory} from "../actions/categoryActionsCreators";

// TODO add validation to fields
class EditCategory extends React.Component {
    formRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        const {props} = this;
        const formElements = this.formRef.current.elements;
        const payload = {
            name: formElements.title.value,
            description: formElements.description.value,
            timestamp: Date.now(),
        };

        props.addCategory(payload);
        props.history.go(-1);
    };

    render() {
        console.log(this.props);
        const id = this.props.match.params.id;
        console.log(id);
        const category = this.props.categories[id];
        return (
            <React.Fragment>
                <div className="h1 text-center p-3">Edit category:</div>

                <div className="row">
                    <div className="col-sm-12">

                        <form onSubmit={this.handleSubmit}
                              ref={this.formRef}
                        >

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                                </div>
                                <input type="text"
                                       className="form-control"
                                       name={"title"}
                                       defaultValue={category.name}
                                />
                            </div>

                            <label>Description (optional)</label>
                            <div className="input-group">
                                    <textarea className="form-control"
                                              defaultValue={category.description}
                                              name={"description"}
                                    />
                            </div>

                            <input type="submit"
                                   className="btn btn-dark mt-3"
                            />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({categories}) => ({categories});
const mapDispatchToProps = (dispatch) => ({addCategory: bindActionCreators(createCategory, dispatch)});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCategory))