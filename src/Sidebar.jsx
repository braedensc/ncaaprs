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


  
  return (
    <div className={(expand) ? 'sidebar' : 'sidebar collapse'}>
      <div>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesLJ') ? 'selected' : ''}`} id="athletesLJ" onClick={() => handleClick('athletesLJ')}>
          
          {expand ? ' Long Jump' : 'LJ'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesTJ') ? 'selected' : ''}`} id="athletesTJ" onClick={() => handleClick('athletesTJ')}>
          
          {expand ? ' Triple Jump' : 'TJ'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesHJ') ? 'selected' : ''}`} id="athletesHJ" onClick={() => handleClick('athletesHJ')}>
          
          {expand ? ' High Jump' : 'HJ'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesWT') ? 'selected' : ''}`} id="athletesWT" onClick={() => handleClick('athletesWT')}>
          
          {expand ? ' Weight Throw' : 'WT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesHT') ? 'selected' : ''}`} id="athletesHT" onClick={() => handleClick('athletesHT')}>
          
          {expand ? ' Hammer Throw' : 'HT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesST') ? 'selected' : ''}`} id="athletesST" onClick={() => handleClick('athletesST')}>
          
          {expand ? ' Shotput' : 'ST'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesDT') ? 'selected' : ''}`} id="athletesDT" onClick={() => handleClick('athletesDT')}>
          
          {expand ? ' Discus' : 'DT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesJT') ? 'selected' : ''}`} id="athletesJT" onClick={() => handleClick('athletesJT')}>
          
          {expand ? ' Javelin' : 'JT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletesPV') ? 'selected' : ''}`} id="athletesPV" onClick={() => handleClick('athletesPV')}>
          
          {expand ? ' Pole Vault' : 'PV'}
        </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes60') ? 'selected' : ''}`} id="athletes60" onClick={() => handleClick('athletes60')}>
          
          {expand ? ' 60' : '60'}
        </button>
      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes60H') ? 'selected' : ''}`} id="athletes60H" onClick={() => handleClick('athletes60H')}>
          
          {expand ? ' 60 Hurdles' : '60H'}
      </button>
      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes100') ? 'selected' : ''}`} id="athletes100" onClick={() => handleClick('athletes100')}>
          
          {expand ? ' 100' : '100'}
      </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes100H') ? 'selected' : ''}`} id="athletes100H" onClick={() => handleClick('athletes100H')}>
          
          {expand ? ' 100 Hurdles' : '100H'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes110H') ? 'selected' : ''}`} id="athletes110H" onClick={() => handleClick('athletes110H')}>
          
          {expand ? ' 110 Hurdles' : '110H'}
        </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes200') ? 'selected' : ''}`} id="athletes200" onClick={() => handleClick('athletes200')}>
          
          {expand ? ' 200' : '200'}
      </button>
      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes400') ? 'selected' : ''}`} id="athletes400" onClick={() => handleClick('athletes400')}>
          
          {expand ? ' 400' : '400'}
      </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes400H') ? 'selected' : ''}`} id="athletes400H" onClick={() => handleClick('athletes400H')}>
          
          {expand ? ' 400 Hurdles' : '400H'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes600') ? 'selected' : ''}`} id="athletes600" onClick={() => handleClick('athletes600')}>
          
          {expand ? ' 600' : '600'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes800') ? 'selected' : ''}`} id="athletes800" onClick={() => handleClick('athletes800')}>
          
          {expand ? ' 800' : '800'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes1000') ? 'selected' : ''}`} id="athletes1000" onClick={() => handleClick('athletes1000')}>
          
          {expand ? ' 1000' : '1000'}
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

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'athletes3000S') ? 'selected' : ''}`} id="athletes3000S" onClick={() => handleClick('athletes3000S')}>
         
         {expand ? ' 3000S' : '3000S'}
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
      {/*
        <button type="button" className="collapse-button" onClick={() => toggleExpand()}>
          <FontAwesomeIcon icon={expand ? faCaretSquareLeft : faCaretSquareRight} size="lg" title={expand ? 'Collapse' : 'Expand'} />
        </button>
        */}
      </div>
     
    </div>
           
    
  );
}


