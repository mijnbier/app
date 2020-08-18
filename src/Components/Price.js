import React from 'react';


export default function Price(props) {

    return <span>&euro; {props.value.toFixed(2)}</span>

}