import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import beercategories from "./BeerCategory"

export default  ({ beers }) =>

    <Tabs 
    value={0}
    variant="scrollable"
    scrollButtons="on">
        <Tab label="Alle" />
        {beercategories.map(category =>  
            (
          <Tab key={category} label={category}/>)
          )}
        
    </Tabs>

