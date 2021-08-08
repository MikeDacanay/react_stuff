import * as actionTypes from '../action/actionTypes';

const updateObject = (old, upd) => {
    return {
        ...old,
        ...upd,
    }
}

const initialState = {
    breed: 'bulldog-french',
    img: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_2326.jpg'
}

const choose_img_dog = (state, action) => {
    return updateObject(state, {
        img: action.img
    });
}    

const choose_breed_dog = (state, action) => {
    return updateObject(state, {
        breed: action.breed
    });
}

export const dogReducer = (state = initialState, action) => {
    if(action.type === actionTypes.CHOOSE_IMG_DOG){
        return choose_img_dog(state, action)
    }
    if(action.type === actionTypes.CHOOSE_BREED_DOG){
        return choose_breed_dog(state, action)
    }

    return state;
}