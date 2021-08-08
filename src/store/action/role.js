import * as actionTypes from './actionTypes';

export const choose_role = (role) => {
    return {
        type: actionTypes.CHOOSE_ROLE,
        role: role,
    }
}