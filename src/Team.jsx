import React , { Component } from 'react';
import AthleteList from './AthleteList';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle
} from '@fortawesome/free-solid-svg-icons';


class Team extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


viewToggle = () => {
    const { forwardRef } = this.props;
    const { display } = forwardRef.current.style;
    forwardRef.current.style.display = (display === 'none') ? 'grid' : 'none';
  }

handleIconClick = (event, func) => {
    event.stopPropagation();
    if (func !== undefined) {
      func();
    }
  }

render() {

  const {
    team, removeFunc
  } = this.props;
  return (
    
    <div className = 'user' id={team.id.toString()}>
      <div>
        <FontAwesomeIcon className="fa-minus-circle" icon={faMinusCircle} size="sm" onClick={() => {removeFunc(team.id)}} title="Remove" />
        </div>
      <span>
        <button
          type="button"
          className="user-banner"
          onClick={(e) => {
            e.preventDefault();
            window.open(team.teamurl, '_blank');
            
            }}
          
          onKeyDown={() => this.viewToggle()}
          

        >
          <img className="profile-picture" src={team.athletes[0].logo} alt="Account profile" />
          <span className="profile-text">
            {' '}
            <span className="profile-name">{team.athletes[0].title}</span>
            {' '}
            <span className="profile-email">
              (
              {team.athletes[0].teamType}
              ) 
            </span>
            <img className="profile-picture1" src={team.athletes[0].logo} alt="Account profile" />
          </span>
        </button>
        
              
      

        </span>
       <div style={{ display: 'grid' }} className="Files/Folders" ref={this.props.forwardRef}>
        <AthleteList
          athleteList={team[team.currentAthletes]}
        />
        
    
    </div>
    </div>
  );
}
}

export default Team;
