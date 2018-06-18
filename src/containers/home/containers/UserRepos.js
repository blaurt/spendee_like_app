import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Repo from '../components/Repo';
// import {
// 	recordActionsCreators
// } from '../../records/actions/doUserRepos';
import { bindActionCreators } from 'redux'

class UserRepos extends Component {

	componentDidMount() {
		let username = 'mohandere';
		this.props.doUserRepos(username);
	}

	render() {
		return null;
		let { repos } = this.props;
		let pageContent = ''

		if (this.props.loading) {
      pageContent = (
        <div className="userReposLoader">
          Loading...
        </div>
      )
		} else {
			pageContent = (
				<ul className="repos">
					{repos.map((repo, i) => <Repo key={i} {...repo} />)}
				</ul>
			)
		}

		return (
			<div>
				<h3>Github Projects</h3>
				{pageContent}
			</div>
		);

	}
}


export default (UserRepos);
