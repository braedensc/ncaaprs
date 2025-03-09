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
  const initilaSelected = (selectedElementList.length === 0) ? 'pr800' : selectedElementList[0].id;
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
    console.log('target', target)
    changeEvent(target)
  };
  const sidebarClassName = (expand) ? 'collapsible' : 'collapsible collapse';


  
  return (
    <div className={(expand) ? 'sidebar' : 'sidebar collapse'}>
      <div>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prLJ') ? 'selected' : ''}`} id="prLJ" onClick={() => handleClick('prLJ')}>
          
          {expand ? ' Long Jump' : 'LJ'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prTJ') ? 'selected' : ''}`} id="prTJ" onClick={() => handleClick('prTJ')}>
          
          {expand ? ' Triple Jump' : 'TJ'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prHJ') ? 'selected' : ''}`} id="prHJ" onClick={() => handleClick('prHJ')}>
          
          {expand ? ' High Jump' : 'HJ'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prWT') ? 'selected' : ''}`} id="prWT" onClick={() => handleClick('prWT')}>
          
          {expand ? ' Weight Throw' : 'WT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prHT') ? 'selected' : ''}`} id="prHT" onClick={() => handleClick('prHT')}>
          
          {expand ? ' Hammer Throw' : 'HT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prST') ? 'selected' : ''}`} id="prST" onClick={() => handleClick('prST')}>
          
          {expand ? ' Shotput' : 'ST'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prDT') ? 'selected' : ''}`} id="prDT" onClick={() => handleClick('prDT')}>
          
          {expand ? ' Discus' : 'DT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prJT') ? 'selected' : ''}`} id="prJT" onClick={() => handleClick('prJT')}>
          
          {expand ? ' Javelin' : 'JT'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prPV') ? 'selected' : ''}`} id="prPV" onClick={() => handleClick('prPV')}>
          
          {expand ? ' Pole Vault' : 'PV'}
        </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr60') ? 'selected' : ''}`} id="pr60" onClick={() => handleClick('pr60')}>
          
          {expand ? ' 60' : '60'}
        </button>
      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr60H') ? 'selected' : ''}`} id="pr60H" onClick={() => handleClick('pr60H')}>
          
          {expand ? ' 60 Hurdles' : '60H'}
      </button>
      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr100') ? 'selected' : ''}`} id="pr100" onClick={() => handleClick('pr100')}>
          
          {expand ? ' 100' : '100'}
      </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr100H') ? 'selected' : ''}`} id="pr100H" onClick={() => handleClick('pr100H')}>
          
          {expand ? ' 100 Hurdles' : '100H'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr110H') ? 'selected' : ''}`} id="pr110H" onClick={() => handleClick('pr110H')}>
          
          {expand ? ' 110 Hurdles' : '110H'}
        </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr200') ? 'selected' : ''}`} id="pr200" onClick={() => handleClick('pr200')}>
          
          {expand ? ' 200' : '200'}
      </button>
      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr400') ? 'selected' : ''}`} id="pr400" onClick={() => handleClick('pr400')}>
          
          {expand ? ' 400' : '400'}
      </button>

      <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr400H') ? 'selected' : ''}`} id="pr400H" onClick={() => handleClick('pr400H')}>
          
          {expand ? ' 400 Hurdles' : '400H'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr600') ? 'selected' : ''}`} id="pr600" onClick={() => handleClick('pr600')}>
          
          {expand ? ' 600' : '600'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr800') ? 'selected' : ''}`} id="pr800" onClick={() => handleClick('pr800')}>
          
          {expand ? ' 800' : '800'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr1000') ? 'selected' : ''}`} id="pr1000" onClick={() => handleClick('pr1000')}>
          
          {expand ? ' 1000' : '1000'}
      </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr1500') ? 'selected' : ''}`} id="pr1500" onClick={() => handleClick('pr1500')}>
          
          {expand ? ' 1500' : '1500'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'prMile') ? 'selected' : ''}`} id="prMile" onClick={() => handleClick('prMile')}>
          
          {expand ? ' Mile' : 'Mile'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr3000') ? 'selected' : ''}`} id="pr3000" onClick={() => handleClick('pr3000')}>
         
          {expand ? ' 3000' : '3000'}
        </button>

        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr3000S') ? 'selected' : ''}`} id="pr3000S" onClick={() => handleClick('pr3000S')}>
         
         {expand ? ' 3000S' : '3000S'}
       </button>


        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr5000') ? 'selected' : ''}`} id="pr5000" onClick={() => handleClick('pr5000')}>
         
          {expand ? ' 5000' : '5000'}
        </button>
        <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr10000') ? 'selected' : ''}`} id="pr10000" onClick={() => handleClick('pr10000')}>
         
         {expand ? ' 10000' : '10000'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr5k') ? 'selected' : ''}`} id="pr5k" onClick={() => handleClick('pr5k')}>
         
         {expand ? ' 5k (XC)' : '5k'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr6k') ? 'selected' : ''}`} id="pr6k" onClick={() => handleClick('pr6k')}>
         
         {expand ? ' 6k (XC)' : '6k'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr8k') ? 'selected' : ''}`} id="pr8k" onClick={() => handleClick('pr8k')}>
         
         {expand ? ' 8k (XC)' : '8k'}
       </button>
       <button type="button" className={`sidebar-item ${sidebarClassName} ${(selected === 'pr10k') ? 'selected' : ''}`} id="pr10k" onClick={() => handleClick('pr10k')}>
         
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


