import React from 'react';

import { ContextUseConsumer } from './ContextUseConsumer/ContextUseConsumer';

export const UserContextX = React.createContext();

export const ContextUse = props => {
    return (
        <>
            <div>
                ContextUse
            </div>
            <UserContextX.Provider value={[
                100,
                300,
                230,
                845
            ]}>
                <ContextUseConsumer/>
            </UserContextX.Provider>            
        </>
    );
} 