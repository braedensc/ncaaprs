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
    let timeP = athlete.time

    let time = timeP[0]
    time = time.split("  ")
    


    return (
        <div className="athlete" >
          
            <a href={link} target="_blank" rel="noreferrer">{name}</a> - {time[0]} ({timeP[1]})<span style={{fontStyle: "italic", color: "#C0C0C0"}}>{time[1]}{time[2]}  </span>
        </div>
     
    );
  }
}

export default User;
