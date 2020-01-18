const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = `BUY_CAKE`
const BUY_ICECREAM = `BUY_ICECREAM`

const initialCakesState = {
    numOfCakes: 15
}

const initialIcecreamsState = {
    numOfIcecreams: 8
}

function buyCakes(){
    return{
        type: BUY_CAKE,
        payload: `First redux action`
    }
}

function buyIcecreams(){
    return{
        type: BUY_ICECREAM,
        payload: `Second redux action`
    }
}

const cakesReducer = (state=initialCakesState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const icecreamsReducer = (state=initialIcecreamsState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cakes: cakesReducer,
    icecreams: icecreamsReducer
})

const store = createStore(rootReducer)

console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => console.log(`Updated State`, store.getState()))

store.dispatch(buyCakes())
store.dispatch(buyIcecreams())
store.dispatch(buyIcecreams())
store.dispatch(buyCakes())
store.dispatch(buyCakes())

unsubscribe()