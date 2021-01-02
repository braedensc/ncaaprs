import React from 'react';
import Team from './Team';
import './TeamList.css';

export default function TeamList(props) {
  const {
    teamList, removeFunc
  } = props;

  return (
    <div className="user-list">
      {teamList.map((team) => (
        <Team
          team={team}
          forwardRef = {team.ref}
          removeFunc = {removeFunc}
        />
      ))}
    </div>
  );
}

