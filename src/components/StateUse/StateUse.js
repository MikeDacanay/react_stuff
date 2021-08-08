import React, { useState } from 'react';

import { Button } from '../Button/Button';

export const StateUse = props => {
    //Vanilla useState
    const [state, setState] = useState('init');
    
    return (
        <>
            <div>Curr State: {state}</div>
            <Button
                clicked={() => setState('setThis')}
            />
        </>
    )
};

