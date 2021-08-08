import * as actionTypes from '../action/actionTypes';

const updateObject = (old, upd) => {
    return {
        ...old,
        ...upd,
    }
}

const initialState = {
    role: 'none',
}

const choose_role = (state, action) => {
    
    return updateObject(state, {
        role: action.role
    });
}

export const roleReducer = (state = initialState, action) => {
    if(action.type === actionTypes.CHOOSE_ROLE){
        return choose_role(state, action);
    }

    return state;
}
