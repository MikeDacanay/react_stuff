import React from 'react';

const CallbackTitle = props => {
    console.log('TITLE');
    return (
        <div>
            This is callbackTitle
        </div>
    );
};

export default React.memo(CallbackTitle);