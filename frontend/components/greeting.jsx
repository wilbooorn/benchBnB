import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1> Hello {this.props.currentUser.username}! </h1>
          <button onClick={this.handleClick}>Sign Out</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup"> Sign Up</Link>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
