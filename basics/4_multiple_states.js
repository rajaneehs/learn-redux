const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = `BUY_CAKE`
const BUY_ICECREAM = `BUY_ICECREAM`
const ADD_CAKE = `ADD_CAKE`
const ADD_ICECREAM = `ADD_ICECREAM`

function buyCake(){
    return {
        type: BUY_CAKE,
        payload: 'First redux action'
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM,
        payload: 'Second redux action'
    }
}

function addCake(){
    return{
        type: ADD_CAKE,
        payload: 'Third redux action'
    }
}

function addIcecream(){
    return{
        type: ADD_ICECREAM,
        payload: 'Fourth redux action'
    }
}

const initialCakesState = {
    numOfCakes: 10
}

const initialIcecreamsState = {
    numOfIcecreams: 10
}

// reducers
const cakeReducer = (state=initialCakesState, action) => {
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

const icecreamReducer = (state=initialIcecreamsState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        case ADD_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams + 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cakes: cakeReducer,
    icecreams: icecreamReducer
})

const store = createStore(rootReducer)

console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

store.dispatch(buyCake())
store.dispatch(addIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(addCake())

unsubscribe()