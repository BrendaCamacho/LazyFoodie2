import React from 'react'
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
                <li>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="nav-link" id="register">
                        Register
                    </Link>
                </li>
            </React.Fragment>

        )
        const userLink = (
            <React.Fragment>
                <li>
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </React.Fragment>
        )
        return (
            <nav>
                <ul className="right">
                    <li>
                        <Link to="/" className="nav-link">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/saved" className="nav-link">
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