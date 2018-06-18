import React from 'react';

export default class NewRecord extends React.Component {
    formRef = React.createRef();

    handleSubmit = (event) => {

    };

    setTodayDate = () => {
        return new Date().toJSON().slice(0, 10);
    };


    render() {


        return (
            <React.Fragment>
                <div className="container">
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
                                               name="record-type"
                                               value="Income"
                                               id="income"
                                        />
                                        Income
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio"
                                               name="record-type"
                                               value="consumption"
                                               id="consumption"
                                        />
                                        Сonsumption
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                                    </div>
                                    <input type="text"
                                           className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                                    </div>
                                    <input type="date"
                                           className="form-control"
                                           defaultValue={this.setTodayDate()}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Sum</span>
                                    </div>
                                    <input type="number"
                                           className="form-control"
                                    />
                                </div>
                                <label>Description(optional)</label>
                                <div className="input-group">
                                    <textarea className="form-control"/>
                                </div>
                                <br/>
                                <input type="submit"
                                       className="btn btn-dark"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}