import React from 'react';
import BeerListItem from './BeerListItem';


export default function BeerList(props) {
    return <ul>
        {props.data.map(item => <BeerListItem merk={item.merk} brouwerij={item.brouwerij} price={item.price}></BeerListItem>)}
    </ul>
}
