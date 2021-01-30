import React from 'react';
import './Price.css';

export default function Price(props) {

    return <span className="price">&euro; {Number(props.value).toFixed(2)}</span>

}