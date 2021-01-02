import React, { Component } from 'react';
//import './User.css';

class User extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const {
      athlete
    } = this.props;

    let name = athlete.name
    let link = athlete.link
    let time = athlete.time


    return (
        <div className="athlete" >
            <a href={link} target="_blank" rel="noreferrer">{name}</a> - {time}
        </div>
     
    );
  }
}

export default User;
