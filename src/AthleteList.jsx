import React from 'react';
import Athlete from './Athlete';

const AthleteList = (props) => {
  const {
    athleteList = [], // Provide a default value of an empty array
  } = props;

  return (
    <div className="athlete-list">
      {athleteList.map((athlete) => (
        <Athlete
          key={athlete.id} // Ensure each child has a unique key
          athlete={athlete}
        />
      ))}
    </div>
  );
};

export default AthleteList;