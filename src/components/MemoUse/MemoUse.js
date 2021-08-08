import React, { useMemo, useState } from 'react';

import { Button } from '../Button/Button';

export const MemoUse = props => {
    const [state, setState] = useState(0);
    const [state1, setState1] = useState(0);

    const checkEven = useMemo(() => {
        let i = 0;
        // while (i < 2000000000) i++;
        return state % 2 ? 'Odd' : 'Even'
    }, [state]);

    const increaseBtnHandlr = () => setState(state + 1);
    const increase1BtnHandlr = () => setState1(state1 + 1);

    return (
        <>
            <div>
                {state} {checkEven}
            </div>
            <div>
                {state1}
            </div>
            <Button
                clicked={increaseBtnHandlr}>
                Increase By 1
            </Button>
            <Button
                clicked={increase1BtnHandlr}>
                IncreaseX By 1
            </Button>
        </>
    );
};