import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default  ({ beers }) =>

    <Tabs >
        <Tab label="Alle" />
        <Tab label="Blond"  />
        <Tab label="Dubbel"  />
        <Tab label="Tripel"  />
    </Tabs>

