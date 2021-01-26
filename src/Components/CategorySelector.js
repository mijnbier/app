import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import beercategories from "./BeerCategory"

const [value, setValue] = React.useState(0);
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

export default  ({ beers }) =>

    <Tabs
    value={value} 
    onChange={handleChange}
    variant="scrollable"
    scrollButtons="on">
        <Tab label="Alle" />
        {beercategories.map(category =>  
            (
          <Tab key={category} label={category}/>)
          )}
        
    </Tabs>

