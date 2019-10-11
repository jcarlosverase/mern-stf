import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      userdescription: ''
    }
  }

  onChangeUser(e) {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      description: this.state.userdescription
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      userdescription: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUser}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                name="userdescription"
                value={this.state.userdescription}
                onChange={this.onChangeUser}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}