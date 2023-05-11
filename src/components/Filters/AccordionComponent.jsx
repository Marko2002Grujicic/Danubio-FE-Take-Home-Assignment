import React from 'react'
import { AccordionSummary, AccordionDetails, Stack, Typography, Accordion, RadioGroup, FormControl  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButton from './FilterButton';

const AccordionComponent = ({object, expanded, handleChange, setPageNumber, setSelectedValue, selectedValue}) => {
  const {name, array, action} = object;


  return (
    <Accordion  
    expanded={expanded === `${name}`} 
    onChange={handleChange(name)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header">
          <Typography variant='h6'>
              {name}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
          <RadioGroup
          name="radio-buttons-group"
          >
            <Stack direction='row' 
            flexWrap='wrap' 
            gap='10px'
            >
            {array.map((item, index) => (
                <FilterButton 
                value={item.value} key={index}
                label={item.label}
                action={action}
                setPageNumber={setPageNumber}
                setSelectedValue={setSelectedValue}
                selectedValue={selectedValue}
                />
    
              ))}
            </Stack>
            </RadioGroup>
            </FormControl>
        </AccordionDetails>
        </Accordion>
  )
}

export default AccordionComponent