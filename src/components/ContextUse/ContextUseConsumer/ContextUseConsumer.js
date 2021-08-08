import React, { useContext  } from 'react';

import { UserContextX } from '../ContextUse';

export const ContextUseConsumer = props => {
    const user = useContext(UserContextX);

    return (
        user.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    );
}

