import React, { useReducer } from 'react';

import { Button } from '../Button/Button';

const initState = 0;
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': 
            return state + action.payload
        case 'decrement':
            return state - action.payload
        case 'reset':
            return initState
        default:
            return state
    }
};

export const ReducerUse = props => {
    const [count, dispatch] = useReducer(reducer, initState)

    const incrementBtnHandlr = (v) => {
        dispatch({
            type:'increment',
            payload: v,
        });
    };

    const decrementBtnHandlr = (v) => {
        dispatch({
            type: 'decrement',
            payload: v
        });
    };

    const resetBtnHandlr = () => {
        dispatch({type: 'reset'});
    };

    return (
        <div>
            <div className="">Count - { count }</div>
            <Button
                clicked={() => incrementBtnHandlr(3)}    
            >
                Increment
            </Button>
            <Button
                clicked={() => decrementBtnHandlr(5)}    
            >
                Decrement
            </Button>
            <Button
                clicked={resetBtnHandlr}    
            >
                Reset
            </Button>
        </div>
    )
};