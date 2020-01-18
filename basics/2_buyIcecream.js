const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUYCAKE'
const BUY_ICECREAM = 'BUYICECREAM'
const ADD_CAKE = 'ADDCAKE'
const ADD_ICECREAM = 'ADDICECREAM'

// not assigning any payloads
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

function addCake(){
    return{
        type: ADD_CAKE
    }
}

function addIcecream(){
    return{
        type: ADD_ICECREAM
    }
}

const initialState = {
    numOfCakes: 15,
    numOfIcecreams: 20
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
        case ADD_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        case ADD_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams + 1
        }
        default: return state
    }
}

const store = createStore(reducer)

console.log(`Initial State`, store.getState())

const unsubscribe = store.subscribe(() => console.log(`Updated State`, store.getState()))

store.dispatch(buyCake())
store.dispatch(addIcecream())
store.dispatch(addCake())
store.dispatch(buyIcecream())

unsubscribe()