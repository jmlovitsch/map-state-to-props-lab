import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {
    constructor(props){
        super()
        this.state={

        }
    }

  render() {
      const hometown = this.props.users.map((u, index)=> <li key={index}>{u.username}</li>)
    return (
      <div>
        <ul>
          Users!
          { hometown}
          <br>

          </br>
          There are {this.props.numberOfUsers} user(s).
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      users: state.users,
      numberOfUsers: state.users.length
    };
  };
export default connect(mapStateToProps)(Users)
