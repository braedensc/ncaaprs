import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
//import icon from './images/unidrive-logo.png';
//import iconWhite from './images/unidrive-logo-white.png';
import './Header.css';
import ACCMenSearch from './ACCMenSearch.jsx';
import ACCWomenSearch from './ACCWomenSearch.jsx';
import SECMenSearch from './SECMenSearch.jsx';
import SECWomenSearch from './SECWomenSearch.jsx';
import {
 faUserSlash
} from '@fortawesome/free-solid-svg-icons';


export default function Header({
changeTeam, removeTeams
}) {
  let currentTheme = localStorage.getItem('theme');
  if (currentTheme === null) currentTheme = 'light';
  const [theme, setTheme] = useState(currentTheme);

  let currentValue = 'https://www.tfrrs.org/teams/GA_college_m_Georgia_Tech.html'
  const [value, setValue] = useState(currentValue);
  
  const body = document.getElementsByTagName('body')[0];


  if (theme === 'dark') {
    body.classList.add('dark-theme');
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      body.classList.remove('dark-theme');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-theme');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleChange = (event) => {
   // changeTeam(event.target.value)
    setValue(event.target.value);
   // changeTeam(event.target.value)
  }

 const handleSubmit = (event) => {
  event.preventDefault();
    changeTeam(value)
  }

  return (

  


    <div className="header-container">
      <span>
        <form className='search-container' onSubmit={handleSubmit}>
          <label>
            {"Paste Link to Team Tfrrs Page: "}
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
                   
        <button type="button" className="sidebar-remove-button" id="remove-btn" onClick={() => removeTeams()}>
          <FontAwesomeIcon icon={faUserSlash} size="lg" title="Remove All Accounts" />
          {'Remove All Teams'}
        </button>
  
      <SECWomenSearch
       changeTeam={changeTeam}
      >
      </SECWomenSearch>
      <SECMenSearch
       changeTeam={changeTeam}
      >
      </SECMenSearch>
      <ACCWomenSearch
       changeTeam={changeTeam}
      >
      </ACCWomenSearch>
      <ACCMenSearch
       changeTeam={changeTeam}
      >
      </ACCMenSearch>

      
      </span>
    </div>
  );
}

