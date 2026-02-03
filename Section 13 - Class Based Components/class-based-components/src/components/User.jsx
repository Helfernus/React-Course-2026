import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('No Users Provided!');
    }
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
