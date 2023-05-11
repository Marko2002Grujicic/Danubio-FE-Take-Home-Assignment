import { Button, FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const FilterButton = ({value, label,selectedValue, setSelectedValue, action, setPageNumber}) => {  

  const handleChange = () => {
    setSelectedValue(value)
  };

  const controlProps = (item) => ({
    checked: selectedValue === value,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": label },
  });
  const onClickHandler = () => {
    action(label)
    setPageNumber(1)
  }
  return (
    
    <FormControlLabel id={value} value={value} 
    control={<Radio {...controlProps(`${value}`)}
    onClick={()=> {onClickHandler()}} 
    />} 
    label= {
    
    <Button 
      variant={selectedValue === value ? 'contained' : 'outlined'}>
      {label}
    </Button>
}/>
  )
}

export default FilterButton