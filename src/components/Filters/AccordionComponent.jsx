import React from 'react'
import { Accordion,AccordionSummary, AccordionDetails, Stack, Typography, RadioGroup, FormControl  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterButton from './FilterButton';

const AccordionComponent = ({object, expanded, handleExpand, setPageNumber, setAppliedFilters, appliedFilters}) => {
  const {name, array, action} = object;
  return (
    <Accordion  
    expanded={expanded.includes(name)} 
    onChange={()=> handleExpand(name)}>
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
                appliedFilters={appliedFilters}
                setAppliedFilters={setAppliedFilters}
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