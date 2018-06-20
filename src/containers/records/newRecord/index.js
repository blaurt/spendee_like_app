import React from 'react';
import {connect} from "react-redux";
import {createRecord} from '../actions/recordActionsCreators';
import {bindActionCreators} from "redux";
import CategoriesDropdown from "../../categories/categoriesDropdown";
import {withRouter} from "react-router-dom";

// TODO add validation to fields
class NewRecord extends React.Component {
    formRef = React.createRef();

    state = {
        category: 'No category'
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const {props, state} = this;
        const formElements = this.formRef.current.elements;
        const payload = {
            type: formElements.record_type.value,
            sum: formElements.sum.value,
            title: formElements.title.value,
            date: formElements.date.value,
            description: formElements.description.value,
            timestamp: Date.now(),
            category: state.category
        };

        props.addRecord(payload);
        props.history.go(-1);

    };

    setTodayDate = () => {
        return new Date().toJSON().slice(0, 10);
    };

    setCategory = (category) => {
        this.setState({category})
    };


    render() {
        return (
            <React.Fragment>
                <div className="h1 text-center p-3">Create new record</div>

                <div className="row">
                    <div className="col-sm-12">

                        <form onSubmit={this.handleSubmit}
                              ref={this.formRef}
                        >
                            Type:
                            <div className="radio">
                                <label>
                                    <input type="radio"
                                           defaultChecked={true}
                                           name={"record_type"}
                                           value="income"
                                           id="income"
                                    />
                                    Income
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio"
                                           name={"record_type"}
                                           value="consumption"
                                           id="consumption"
                                    />
                                    Сonsumption
                                </label>
                            </div>

                            <CategoriesDropdown setCategory={this.setCategory}/>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                                </div>
                                <input type="text"
                                       className="form-control"
                                       name={"title"}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                                </div>
                                <input type="date"
                                       className="form-control"
                                       name={"date"}
                                       defaultValue={this.setTodayDate()}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Sum</span>
                                </div>
                                <input type="number"
                                       name={"sum"}
                                       className="form-control"
                                />
                            </div>
                            <label>Description (optional)</label>
                            <div className="input-group">
                                    <textarea className="form-control"
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

const mapDispatchToProps = (dispatch) => ({addRecord: bindActionCreators(createRecord, dispatch)});
export default withRouter(connect(null, mapDispatchToProps)(NewRecord))