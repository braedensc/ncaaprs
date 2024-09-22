import React from 'react';
import Team from './Team';
import './TeamList.css';

export default function TeamList(props) {
  const {
    teamList = [], // Provide a default value of an empty array
    removeFunc
  } = props;
console.log(teamList)
  return (
    <div className="user-list">
      {teamList.map((team) => (
        <Team
          key={team.id} // Ensure each child has a unique key
          team={team}
          forwardRef={team.ref}
          removeFunc={removeFunc}
        />
      ))}
    </div>
  );
}