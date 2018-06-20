import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createRecord} from "../actions/recordActionsCreators";
import {bindActionCreators} from "redux";
import CategoriesDropdown from "../../categories/categoriesDropdown";

class RecordEdit extends React.Component {
    formRef = React.createRef();

    state = {
        category: 'No category'
    };

    setCategory = (category) => {
        this.setState({category})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {props, state} = this;
        const formElements = this.formRef.current.elements;
        console.log(formElements);
        const payload = {
            type: formElements.record_type.value,
            sum: Number(formElements.sum.value),
            title: formElements.title.value,
            date: formElements.date.value,
            description: formElements.description.value,
            timestamp: Date.now(),
            category: state.category
        };

        props.addRecord(payload);
        props.history.go(-1);

    };

    render() {
        const id = this.props.match.params.id;
        const currentRecord = this.props.records[id];
        console.log(currentRecord);
        console.log(id);
        console.log(currentRecord.type === 'income');
        console.log(currentRecord.type !== 'income');
        return (
            <React.Fragment>
                <div className="h1 text-center p-3">Edit record with id: {id}</div>
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
                               defaultValue={currentRecord.title}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                        </div>
                        <input type="date"
                               className="form-control"
                               name={"date"}
                               defaultValue={currentRecord.date}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Sum</span>
                        </div>
                        <input type="number"
                               name={"sum"}
                               className="form-control"
                               defaultValue={currentRecord.sum}

                        />
                    </div>
                    <label>Description (optional)</label>
                    <div className="input-group">
                                    <textarea className="form-control"
                                              defaultValue={currentRecord.description}

                                              name={"description"}
                                    />
                    </div>

                    <input type="submit"
                           className="btn btn-dark mt-3"
                           value={'Save'}
                    />
                </form>
            </React.Fragment>
        )

    }


}

const mapStateToProps = ({records}) => ({records});
const mapDispatchToProps = (dispatch) => ({addRecord: bindActionCreators(createRecord, dispatch)});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecordEdit));