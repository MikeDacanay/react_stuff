import React from 'react';

export const Input = props => {
    return (
        <input
            type={props.type}
            onChange={props.changed}
        />
    );
};