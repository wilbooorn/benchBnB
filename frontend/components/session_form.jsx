import React from 'react';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    this.setState({username});
  }

  handlePassword(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    this.setState({password});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({username: "", password: ""});
    this.props.history.push("/");
  }

  render(){
    let text;
    if (this.props.formType === "login"){
      text = "Login";
    } else{
      text = "Signup";
    }
    return (

      <div>
        <h1>{text}</h1>
        <h3>{this.props.errors}</h3>
        <form>
          <input type='text' onChange={this.handleUsername}
            value={this.state.username} id='username'>
          </input>

          <input type='password' onChange={this.handlePassword}
            value={this.state.password} id='password'>
          </input>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
