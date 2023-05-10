import { Button, FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const FilterButton = ({item, selectedValue, setSelectedValue, action, setPageNumber}) => {  

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const onClickHandler = () => {
    action(item)
    setPageNumber(1)
  }
  return (
    
    <FormControlLabel id={item} value={item} 
    control={<Radio {...controlProps(`${item}`)}
    onClick={()=> {onClickHandler()}} 
    />} 
    label= {
    <Button 
      className={selectedValue} 
      variant={selectedValue === item ? 'contained' : 'outlined'}>
      {item}
    </Button>
}/>
  )
}

export default FilterButton