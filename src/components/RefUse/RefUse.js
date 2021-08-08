import React, { useRef, useEffect } from 'react';

export const RefUse = props => {
    const ref1 = useRef(null);
    
    useEffect(() => {
        // console.log(ref1.current);
    }, []);    

    return (
        <div ref={ref1}>
            This is RefUse
        </div>
    )
};