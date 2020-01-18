const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUYCAKE'
const BUY_ICECREAM = 'BUYICECREAM'

// noy passing any payloads
function buyCake(){
    return{
        type: BUY_CAKE
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

// initial state values
const initialState = {
    numOfCakes: 10,
    numOfIcecreams: 5
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

const store = createStore(reducer)

console.log(`Initial State`, store.getState())
const unsubscribe = store.subscribe(() => console.log(`Updated State`, store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()
