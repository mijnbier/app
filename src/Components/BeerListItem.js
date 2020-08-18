import React from 'react';
import Price from './Price';

export default function BeerListItem(props) {

    return <li>Naam: {props.brand}, {props.alc}% alc. ({props.brewery})  <Price value={props.price} /> Voorraad: {props.stock}x</li>
}