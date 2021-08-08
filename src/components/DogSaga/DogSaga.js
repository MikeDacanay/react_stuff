import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';

import { Button } from '../Button/Button';

const mapStateToProps = state => {
    return {
        currentBreed: state.dogReducer.breed,
        img: state.dogReducer.img,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sagaFetchDog: () => dispatch(actions.sagaFetchRandomDog()),
    }
};

export const DogSaga = connect(mapStateToProps, mapDispatchToProps)(props => {
    
    const fetchDogHandlr = () => {
        props.sagaFetchDog();
    }

    return (
        <>
            <Button
                clicked={fetchDogHandlr}
            >Fetch a Dog!</Button>
            <div className="">Breed: {props.currentBreed}</div>
            <img src={props.img} alt={props.img} />
        </>
    )
});
