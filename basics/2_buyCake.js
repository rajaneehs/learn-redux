const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUYCAKE'
const ADD_CAKE = 'ADDCAKE'

function buyCake(){
    return {
        type: BUY_CAKE,
        payload: `first redux action`
    }
}

function addCake(){
    return{
        type: ADD_CAKE,
        payload: `second redux action`
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state
    }
}

const store = createStore(reducer)

console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => console.log(`Updated State`, store.getState()))

store.dispatch(addCake())
store.dispatch(addCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()
