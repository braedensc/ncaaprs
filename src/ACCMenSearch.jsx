import React from 'react';
import Select from 'react-select';
import './Filter.css'


export default function ACCMenSearch({ changeTeam }) {

  const filterOptions = [
    { value: "all", label: 'Add All' },
    { value: "https://www.tfrrs.org/teams/xc/MA_college_m_Boston_College.html", label: 'Boston College' },
    { value: "https://www.tfrrs.org/teams/SC_college_m_Clemson.html", label: 'Clemson' },
    { value: "https://www.tfrrs.org/teams/NC_college_m_Duke.html", label: 'Duke' },
    { value: "https://www.tfrrs.org/teams/xc/FL_college_m_Florida_State.html", label: 'Florida State' },
    { value: "https://www.tfrrs.org/teams/GA_college_m_Georgia_Tech.html", label: 'Georgia Tech' },
    { value: "https://www.tfrrs.org/teams/xc/KY_college_m_Louisville.html", label: 'Louisville' },
    { value: "https://www.tfrrs.org/teams/xc/FL_college_m_Miami_FL.html", label: 'Miami' },
    { value: "https://www.tfrrs.org/teams/NC_college_m_North_Carolina_St.html", label: 'NC State' },
    { value: "https://www.tfrrs.org/teams/xc/NC_college_m_North_Carolina.html", label: 'UNC' },
    { value: "https://www.tfrrs.org/teams/xc/IN_college_m_Notre_Dame_IN.html", label: 'Notre Dame' },
    { value: "https://www.tfrrs.org/teams/xc/PA_college_m_Pittsburgh.html", label: 'Pittsburgh' },
    { value: "https://www.tfrrs.org/teams/NY_college_m_Syracuse.html", label: 'Syracuse' },
    { value: "https://www.tfrrs.org/teams/xc/VA_college_m_Virginia.html", label: 'Virginia' },
    { value: "https://www.tfrrs.org/teams/xc/VA_college_m_Virginia_Tech.html", label: 'Virginia Tech' },
    { value: "https://www.tfrrs.org/teams/xc/NC_college_m_Wake_Forest.html", label: 'Wake Forest' },
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
    console.log(selected)
    if (selected === 'all') {
      console.log(selected)
      for (let i = 1; i< filterOptions.length; i++) {
        console.log(filterOptions[i].value)
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
        placeholder="ACC MEN"
        styles={customStyles(filterContainer)}
        controlShouldRenderValue = {false}

      />
    </div>
  );
}

