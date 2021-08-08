import * as actionTypes from './actionTypes';

export const choose_breed_dog = (breed) =>{
    return {
        type: actionTypes.CHOOSE_BREED_DOG,
        breed: breed
    }
}

export const choose_img_dog = (img) =>{
    return {
        type: actionTypes.CHOOSE_IMG_DOG,
        img: img
    }
}