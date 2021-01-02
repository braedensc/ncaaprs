import React from 'react';
import Select from 'react-select';
import './Filter.css'


export default function SECWomenSearch({ changeTeam }) {

  const filterOptions = [
    { value: "all", label: 'Add All' },
    { value: "https://www.tfrrs.org/teams/xc/AL_college_f_Alabama.html", label: 'Alabama' },
    { value: "https://www.tfrrs.org/teams/xc/AR_college_f_Arkansas.html", label: 'Arkansas' },
    { value: "https://www.tfrrs.org/teams/xc/AL_college_f_Auburn.html", label: 'Auburn' },
    { value: "https://www.tfrrs.org/teams/xc/FL_college_f_Florida.html", label: 'Florida' },
    { value: "https://www.tfrrs.org/teams/xc/GA_college_f_Georgia.html", label: 'Georgia' },
    { value: "https://www.tfrrs.org/teams/xc/KY_college_f_Kentucky.html", label: 'Kentucky' },
    { value: "https://www.tfrrs.org/teams/xc/LA_college_f_LSU.html", label: 'LSU' },
    { value: "https://www.tfrrs.org/teams/xc/MS_college_f_Mississippi_St.html", label: 'Miss St' },
    { value: "https://www.tfrrs.org/teams/xc/MO_college_f_Missouri.html", label: 'Missouri' },
    { value: "https://www.tfrrs.org/teams/xc/MS_college_f_Mississippi.html", label: 'Ole Miss' },
    { value: "https://www.tfrrs.org/teams/xc/SC_college_f_South_Carolina.html", label: 'South Carolina' },
    { value: "https://www.tfrrs.org/teams/xc/TN_college_f_Tennessee.html", label: 'Tennessee' },
    { value: "https://www.tfrrs.org/teams/xc/TX_college_f_Texas_AM.html", label: 'Texas A&M' },
    { value: "https://www.tfrrs.org/teams/xc/TN_college_f_Vanderbilt.html", label: 'Vanderbilt' },

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
        placeholder="SEC WOMEN"
        styles={customStyles(filterContainer)}
        controlShouldRenderValue = {false}

      />
    </div>
  );
}

