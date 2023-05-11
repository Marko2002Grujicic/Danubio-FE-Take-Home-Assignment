import { Button, FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const FilterButton = ({value, label,action, setPageNumber, setAppliedFilters,appliedFilters }) => {  

  const isChecked = appliedFilters.includes(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
        /* checks If the new value is a status/gender/species filter, filters out any other status/gender/species filters, and then applies those filters in the end.*/
    if (newValue.includes("status-")) {
      const statusCheckedValues = appliedFilters.filter((value) => !value.includes("status-"));
      setAppliedFilters([...statusCheckedValues, newValue]);
    }else if (newValue.includes('gender-')) {
      const genderCheckedValues = appliedFilters.filter((value) => !value.includes("gender-"));
      setAppliedFilters([...genderCheckedValues, newValue]);
    }else if (newValue.includes('species-')){
      const speciesCheckedValues = appliedFilters.filter((value) => !value.includes("species-"));
      setAppliedFilters([...speciesCheckedValues, newValue]);
    }
     else {
      const newAppliedFilters = isChecked ? (appliedFilters.filter((value) => value !== newValue)) : ([...appliedFilters, newValue]);
      setAppliedFilters(newAppliedFilters);
    }
    action(label)
    setPageNumber(1)
  };
    

  return (
    
    <FormControlLabel id={value} value={value} 
    control={<Radio
    checked={isChecked}
    onChange={handleChange}
    />} 
    label= {
    
    <Button 
      variant={isChecked ? 'contained' : 'outlined'}>
      {label}
    </Button>
}/>
  )
}

export default FilterButton