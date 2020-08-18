import React from 'react';
import BeerListItem from './BeerListItem';


export default function BeerList(props) {
    return <ul>
        {props.data.map(item => <BeerListItem brand={item.brand} brewery={item.brewery} alc={item.alc} price={item.price}></BeerListItem>)}
    </ul>
}
