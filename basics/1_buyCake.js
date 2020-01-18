const redux = require('redux')
// requiring redux package
const createStore = redux.createStore
// extractin createStore function from redux

const BUY_CAKE = 'BUYCAKE'
// just assigninga a string to constant

// action generator function which returns an action object
function buyCake(){
    return{
        type: BUY_CAKE,
        payload: 'First redux action'
    }
}
// payload is just a value attached

// create state with initial value
const initialState = {
    numOfCakes: 10
}

// reducer function which is a pure function
// which takes initialState & an action
// based upon the type it returns the new state
const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// store creation by passing reducer function as an arg
const store = createStore(reducer)

// getting the initial state
console.log(`Initial State`, store.getState())

// 
const unsubcribe = store.subscribe(() => {console.log(`Updated state`, store.getState())})

// dispatching actions to store
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// unregistering OR unsubcribing from the store using the function returned buy the subscribe()
unsubcribe()