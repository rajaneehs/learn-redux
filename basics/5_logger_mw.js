const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = `BUY_CAKE`
const BUY_ICECREAM = `BUY_ICECREAM`

function buyCake(){
    return{
        type: BUY_CAKE,
        payload: `First Redux action`
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM,
        payload: `Second Redux action`
    }
}

const initialCakeState = {
    numOfCakes: 8
}

const initialIcecreamState = {
    numOfIcecreams: 6
}

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const icecreamReducer = (state=initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cakes: cakeReducer,
    icecreams: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => console.log(`Initial State`, store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()