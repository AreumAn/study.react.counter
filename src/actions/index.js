import * as actionTypes from './actionTypes';

export const increment = (index) => ({
    type: actionTypes.INCREMENT,
    index
})

export const decrement = () => ({
    type: actionTypes.DECREMENT
})

export const setColor = (index, color) => ({
    type: actionTypes.SETCOLOR,
    index,
    color
})

export const create = () => ({
    type: actionTypes.CREATE
})

export const remove = () => ({
    type: actionTypes.REMOVE
})
