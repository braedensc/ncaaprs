import React from 'react';
import Athlete from './Athlete';
//import './AthleteList.css';

export default function AthleteList(props) {
  const {
    athleteList
  } = props;

  return (
    <div className="athlete-list">
      {athleteList.map((athlete) => (
        <Athlete
          athlete={athlete}
        />
      ))}
    </div>
  );
}
