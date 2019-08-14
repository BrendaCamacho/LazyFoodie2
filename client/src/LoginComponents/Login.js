import React, { Component } from 'react'
import { login, getProfile } from './UserFunctions'
import API from "../utils/API";
import Saved from "../pages/Saved";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      token:'',
      errors: {},
      userId:""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.setState({token: res})
        this.props.history.push(`/`)
      }

    })
  }

  render() {
    return (
      <div className="container valign-wrapper">
        <div className="col">
          <div className="col-md-6 col-sm-12 mx-auto mt-5 formLogin z-depth-3">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Sign in
              </button>
              <Saved  token={this.state.token}  userId = {this.state.userId}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
