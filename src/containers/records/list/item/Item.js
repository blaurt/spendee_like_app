import React from 'react';
import ActionBar from "../../../../common/components/actionBar/ActionBar";
import PropTypes from "prop-types";

const ListItem = (props) => {


    console.log(props);
    const {index} = props;
    const {title, date, sum, description, type, category} = props.record;
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{title}</td>
            <td>{type}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{sum}</td>
            <td>{description}</td>
            <ActionBar id={index}/>
        </tr>
    )
};

ListItem.propTypes = {
    addFish: PropTypes.func
};

ListItem.defaultProps = {
    records: [],
};

export default ListItem;