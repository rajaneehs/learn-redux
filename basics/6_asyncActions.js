const redux = require('redux')
const axios = require('axios')
const thunk = require('redux-thunk').default

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const FETCH_USERS_REQUEST = `FETCH_USERS_REQUEST`
const FETCH_USERS_SUCCESS = `FETCH_USERS_SUCCESS`
const FETCH_USERS_FAILURE = `FETCH_USERS_FAILURE`

const initialState = {
    loading: true,
    users: [],
    error: ''
}

function fetchUsersRequest(){
    return{
        type: FETCH_USERS_REQUEST
    }
}

function fetechUsersSuccess(users){
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function fetechUsersFailure(error){
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return{ ...state, loading: true}
        case FETCH_USERS_SUCCESS: return{ ...state, loading: false, users: action.payload, error: ''  }
        case FETCH_USERS_FAILURE: return{ ...state, loading: false, users: [], error: action.payload }
        default: return state
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data.map(user => user.id)
                dispatch(fetechUsersSuccess(users))
            })
            .catch(err => {
                dispatch(fetechUsersFailure(err.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())
