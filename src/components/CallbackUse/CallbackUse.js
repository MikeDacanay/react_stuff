import React, { useState } from 'react';

import CallbackTitle from './CallbackTitle/CallbackTitle';
import { CallbackAge } from './CallbackAge/CallbackAge';
import { CallbackSalary } from './CallbackSalary/CallbackSalary';
import { Button } from '../Button/Button';

export const CallbackUse = props => {
    const [age, setAge] = useState(24);
    const [salary, setSalary] = useState(50000);

    const incrementAgeHandlr = () => {
        setAge(age + 1);
    };

    const incrementSalaryHandlr = () => {
        setSalary(salary + 1);
    };

    return (
        <>
            <CallbackTitle/>
            <CallbackAge age={age}/>
            <Button clicked={incrementAgeHandlr}>Age++</Button>
            <CallbackSalary salary={salary}/>            
            <Button clicked={incrementSalaryHandlr}>Salary++</Button>        
        </>
    );
};


