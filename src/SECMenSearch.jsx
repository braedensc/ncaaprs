import React from 'react';
import Select from 'react-select';
import './Filter.css'


export default function SECMenSearch({ changeTeam }) {

  const filterOptions = [
    { value: "all", label: 'Add All' },
    { value: "https://www.tfrrs.org/teams/AL_college_m_Alabama.html", label: 'Alabama' },
    { value: "https://www.tfrrs.org/teams/AR_college_m_Arkansas.html", label: 'Arkansas' },
    { value: "https://www.tfrrs.org/teams/AL_college_m_Auburn.html", label: 'Auburn' },
    { value: "https://www.tfrrs.org/teams/FL_college_m_Florida.html", label: 'Florida' },
    { value: "https://www.tfrrs.org/teams/GA_college_m_Georgia.html", label: 'Georgia' },
    { value: "https://www.tfrrs.org/teams/KY_college_m_Kentucky.html", label: 'Kentucky' },
    { value: "https://www.tfrrs.org/teams/LA_college_m_LSU.html", label: 'LSU' },
    { value: "https://www.tfrrs.org/teams/MS_college_m_Mississippi_St.html", label: 'Miss St' },
    { value: "https://www.tfrrs.org/teams/MO_college_m_Missouri.html", label: 'Missouri' },
    { value: "https://www.tfrrs.org/teams/MS_college_m_Mississippi.html", label: 'Ole Miss' },
    { value: "https://www.tfrrs.org/teams/SC_college_m_South_Carolina.html", label: 'South Carolina' },
    { value: "https://www.tfrrs.org/teams/TN_college_m_Tennessee.html", label: 'Tennessee' },
    { value: "https://www.tfrrs.org/teams/TX_college_m_Texas_AM.html", label: 'Texas A&M' },
    { value: "https://www.tfrrs.org/teams/TN_college_m_Vanderbilt.html", label: 'Vanderbilt' },

  ];

  const customStyles = (container) => ({
    container,
    control: (provided) => ({
      ...provided,
      borderRadius: '5px',
      minHeight: '1px',
      height: '32px',
      color: 'white',
      backgroundColor: 'white',
    }),
    input: (provided) => ({
      ...provided,
      minHeight: '1px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      minHeight: '1px',
      paddingTop: '0',
      paddingBottom: '0',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      minHeight: '1px',
      height: '16px',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      minHeight: '1px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      minHeight: '1px',
      height: '32px',
      paddingTop: '0',
      paddingBottom: '0',
      marginBottom: '4px',
      
    }),
    singleValue: (provided) => ({
      ...provided,
      minHeight: '1px',
      paddingBottom: '2px',
      color: 'var(--text)',

    }),
    placeholder: (provided) => ({
      ...provided,
      minHeight: '1px',
      paddingBottom: '2px',
    }),
    menu: (provided) => ({
      ...provided,
      background: 'var(--sub-bg)',
      zIndex: '3',
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,
      color: isSelected ? 'var(--text)' : isFocused ? '#303030' : 'var(--text)',
      cursor: isFocused ? 'pointer' : 'default',
      backgroundColor :  isFocused ? 'var(--hover-color)' : 'white'
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: '#303030',
    }),
  });


  const filterContainer = (provided) => ({
    ...provided,
    display: 'inline-block',
    width: 'auto',
    minWidth: '150px',
  });

  const handleFilterChange = (selected) => {
    if (selected === 'all') {
      for (let i = 1; i< filterOptions.length; i++) {
        changeTeam(filterOptions[i].value)
      }
    } else {
      changeTeam(selected);
    }
  };
  return (
    <div className="filter-container">
      <Select
        closeMenuOnSelect={true}
        options={filterOptions}
        onChange={(selected) => handleFilterChange(selected.value)}
        placeholder="SEC MEN"
        styles={customStyles(filterContainer)}
        controlShouldRenderValue = {false}

      />
    </div>
  );
}

