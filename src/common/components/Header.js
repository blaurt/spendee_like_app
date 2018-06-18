import React, {Component} from 'react';

import {Links} from "../../utils/routerLinks";
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header className="bg-light  mb-3">
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <Link to={Links.home} className="navbar-brand">SpandeeLikeApp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link className="nav-link" to={Links.records} >Records</Link></li>
                            <li className="nav-item active"><Link className="nav-link" to={Links.categories} >Categories</Link></li>
                            <li className="nav-item active"><Link className="nav-link" to={Links.details} >Details</Link></li>
                            <li className="nav-item active"><Link className="nav-link" to={Links.about} >About</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;