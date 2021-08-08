import React from 'react';

export const CallbackAge = React.memo(({age}) => {
    console.log(`AGE, ${age}`);
    return (
        <div>{age}</div>
    );
});