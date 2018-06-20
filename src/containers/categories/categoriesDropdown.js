import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class CategoriesDropdown extends React.Component {
    static propTypes = {
        setCategory: PropTypes.func,
        categories: PropTypes.array,
    };

    static defaultProps = {
        categories: []
    };

    handleSetCategory = (event) => {
        const categoryName = event.target.dataset.categoryName;
        this.props.setCategory(categoryName);
    };

    render() {
        console.log(this.props);
        const {categories} = this.props;
        return (
            <div className="dropdown mb-3">
                <button className="btn btn-secondary dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                    Select category
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span className="dropdown-item" data-category-name="No category"
                          onClick={this.handleSetCategory}>No category</span>
                    {
                        !!categories.length
                            ?
                            categories.map((category) => {
                                return (
                                    <span className="dropdown-item"
                                          key={category.timestamp}
                                          data-category-name={category.name}
                                          onClick={this.handleSetCategory}
                                    >
                                        {category.name}
                                        </span>
                                )
                            })
                            :
                            null
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({categories}) => ({categories});
export default connect(mapStateToProps)(CategoriesDropdown);