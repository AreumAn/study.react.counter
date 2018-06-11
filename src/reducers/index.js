import * as actions from '../actions/actionTypes';

const initialState = {
    counters: [{
        number: 0,
        color: 'blue'
    }]
}

function counterReducer(state = initialState, action) {
    switch(action.type) {
        case actions.INCREMENT : 
            return {
                counters : [
                    ...state.counters.slice(0, action.index),
                    {
                        number: state.counters[action.index].number + 1,
                        color: state.counters[action.index].color
                    },
                    ...state.counters.slice(action.index + 1)
                ]
            }
        case actions.DECREMENT : 
            return {
                counters : [...state.counters.map((item) => ({
                    number: item.number-1,
                    color: item.color
                }))]
            }
        case actions.SETCOLOR : 
            return {
                counters : [
                    ...state.counters.slice(0, action.index),
                    {
                        number: state.counters[action.index].number,
                        color: action.color
                    },
                    ...state.counters.slice(action.index + 1)
                ]
            }
        case actions.CREATE :
            return {
                counters : [...state.counters,
                    {
                        number: 0,
                        color: 'blue'
                    }
                ]
            }
        case actions.REMOVE : 
            return {
                counters : [...state.counters.slice(0, state.counters.length-1)]
            }
        default :
            return state;
    }
}

export default counterReducer;