import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretSquareLeft, faCaretSquareRight
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

export default function Sidebar({
   changeEvent
}) {
  const body = document.getElementsByTagName('body')[0];
 

  const initialState = true;
  const [expand, setExpand] = useState(initialState);

  const selectedElementList = document.getElementsByClassName('selected');
  const initilaSelected = (selectedElementList.length === 0) ? 'athletes800' : selectedElementList[0].id;
  const [selected, setSelected] = useState(initilaSelected);


  const toggleExpand = () => {
    const sidebarItem = document.getElementsByClassName('collapsible');
    Array.from(sidebarItem).forEach((item) => {
      if (expand) {
        item.classList.add('collapse');
        body.style.setProperty('--sidebar-width', '60px');
      } else {
        item.classList.remove('collapse');
        body.style.setProperty('--sidebar-width', '225px');
      }
    });
    setExpand(!expand);
  };

  const handleClick = (target) => {
    setSelected(target);
    changeEvent(target)
  };
  const sidebarClassName = (expand) ? 'collapsible' : 'collapsible collapse';
  
//add under the div below when implementing multi teams
  /*     <button type="button" className="sidebar-add-button" id="signin-btn" onClick={() => authorizeUser()}>
  <FontAwesomeIcon icon={faUserPlus} size="lg" title="Add an Account" />
  {expand ? ' Add Team' : ''}
</button>
<button type="button" className="sidebar-remove-button" id="remove-btn" onClick={() => removeAllAccounts()}>
  <FontAwesomeIcon icon={faUserSlash} size="lg" title="Remove All Accounts" />
  {expand ? ' Remove All Teams' : ''}
</button>
*/
  return (
    <div className={(expand) ? 'sidebar' : 'sidebar collapse'}>
      <div>
  
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes800') ? 'selected' : ''}`} id="athletes800" onClick={() => handleClick('athletes800')}>
          
          {expand ? ' 800' : '800'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes1500') ? 'selected' : ''}`} id="athletes1500" onClick={() => handleClick('athletes1500')}>
          
          {expand ? ' 1500' : '1500'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesMile') ? 'selected' : ''}`} id="athletesMile" onClick={() => handleClick('athletesMile')}>
          
          {expand ? ' Mile' : 'Mile'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes3000') ? 'selected' : ''}`} id="athletes3000" onClick={() => handleClick('athletes3000')}>
         
          {expand ? ' 3000' : '3000'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes5000') ? 'selected' : ''}`} id="athletes5000" onClick={() => handleClick('athletes5000')}>
         
          {expand ? ' 5000' : '5000'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes10000') ? 'selected' : ''}`} id="athletes10000" onClick={() => handleClick('athletes10000')}>
         
         {expand ? ' 10000' : '10000'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes5k') ? 'selected' : ''}`} id="athletes5k" onClick={() => handleClick('athletes5k')}>
         
         {expand ? ' 5k (XC)' : '5k'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes6k') ? 'selected' : ''}`} id="athletes6k" onClick={() => handleClick('athletes6k')}>
         
         {expand ? ' 6k (XC)' : '6k'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes8k') ? 'selected' : ''}`} id="athletes8k" onClick={() => handleClick('athletes8k')}>
         
         {expand ? ' 8k (XC)' : '8k'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes10k') ? 'selected' : ''}`} id="athletes10k" onClick={() => handleClick('athletes10k')}>
         
         {expand ? ' 10k (XC)' : '10k'}
       </button>

       
      </div>
      <div className="collapse-container collapsible">
        <button type="button" className="collapse-button" onClick={() => toggleExpand()}>
          <FontAwesomeIcon icon={expand ? faCaretSquareLeft : faCaretSquareRight} size="lg" title={expand ? 'Collapse' : 'Expand'} />
        </button>
      </div>
    </div>
  );
}


