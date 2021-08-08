import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';


export const EffectUse = props => {
    const  [state, setState] = useState(0);

    //componentDidMount
    useEffect(() => {
        setTimeout(() => {
            console.log('UseEffect on comp load');
        }, 3000)  
    }, [])

    //component/variableDidUpdate
    useEffect(() => {
        // console.log(state);
    }, [state])
    
    return (
        <>
            <div>EffectUse {state}</div>
            <Button
                clicked={() => {
                    setState(state + 1);                    
                }}
            />
        </>
    )


};