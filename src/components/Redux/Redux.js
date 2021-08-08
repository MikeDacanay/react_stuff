import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/action'; 

import { Input } from '../Input/Input';

const mapStateToProps = state => {
    return {
        currentRole: state.roleReducer.role,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeRole: (e) => dispatch(actionCreators.choose_role(e.target.value))
    }
}

export const Redux = connect(mapStateToProps, mapDispatchToProps)(props => {    
    return (
        <>
            <div>{props.currentRole}</div>
            <Input
                type='text'
                changed={props.onChangeRole}
            />
        </>
    )
});

