import React from 'react';
import {Links, buildUrl} from "../../../utils/routerLinks";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from "@fortawesome/fontawesome-free-solid/index";
import {withRouter} from "react-router-dom";
import {deleteRecord} from '../../../containers/records/actions/recordActionsCreators';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const ActionBar = (props) => {
    const {history, id, deleteRecord} = props;
    return (
        <td className="action-bar">
            <FontAwesomeIcon icon={faEdit}
                             onClick={() => history.push(buildUrl(Links.editRecord, {id}))}
            />
            <FontAwesomeIcon icon={faTrash}
                             onClick={() => deleteRecord(id)}/>
        </td>
    );
};

const mapDispatchToProps = (dispatch) => ({deleteRecord: bindActionCreators(deleteRecord, dispatch)});
export default withRouter(connect(null, mapDispatchToProps)(ActionBar));