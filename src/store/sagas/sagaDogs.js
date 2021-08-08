import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../action';
//put puts it back to your view logic
//call send its back to your model logic

export function* fetchDog(){
    const fetchDogAPI = yield axios.get("https://dog.ceo/api/breeds/image/random");

    const img = fetchDogAPI.data.message;

    const sliceThis = "https://images.dog.ceo/breeds/"

    const breed = img.slice(sliceThis.length);


    yield put(actions.choose_img_dog(img));
    yield put(actions.choose_breed_dog(breed));
    return;
}
