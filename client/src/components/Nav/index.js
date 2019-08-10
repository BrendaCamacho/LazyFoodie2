import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './navbar.css'

class Landing extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render() {
        const loginRegLink = (
            <React.Fragment>
                <li className="tab">
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li className="tab">
                    <Link to="/register" id="register">
                        Register
                    </Link>
                </li>
            </React.Fragment>

        )
        const userLink = (
            <React.Fragment>
                <li className="tab">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </React.Fragment>
        )
        return (
            <nav className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab">
                        <Link to="/">
                            Search
                        </Link>
                    </li>
                    <li className="tab">
                        <Link to="/saved">
                            Saved
                        </Link>
                    </li>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </ul>
            </nav>
        )
    }
}
export default withRouter(Landing)