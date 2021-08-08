import React from 'react';

export const Button = props => {
    // console.log('teststs');

    return (
        <button
            onClick={props.clicked}
        >
            {props.children ? props.children : 'Button'}
        </button>  
    )
};