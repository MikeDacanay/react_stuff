import React from 'react';

export const CallbackSalary = React.memo(props => {
    console.log('SALARY');
    return (
        <div>{props.salary}</div>
    );
});