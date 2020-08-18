import React from 'react';
import Price from './Price';

export default function BeerListItem(props) {

    return <li>Naam: {props.merk} ({props.brouwerij}) <Price value={props.price} /></li>
}