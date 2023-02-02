const redux = require('redux');
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const InitialState = {
    loading: false,
    users:[],
    error:''
}
// console.log(InitialState)

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

/// action creators

const fetchUserRequests = () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

/// reducer 

const reducer = (state = InitialState, action) =>{
     switch(action.type){
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true

        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error:''

        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users:[],
            error: action.payload
        }
     }
     
}

// action creator returning a function instead of an action object

const fetchUsers = () =>{
    return function(dispatch){
        console.log('dispatching request')
        dispatch(fetchUserRequests())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            const users = response.data.map(user=> user.id)
            console.log('dispatching fetched users success')
            dispatch(fetchUserSuccess(users))
        })
        .catch((error)=> {
            
            dispatch(fetchUserFailure(error.message))
        })
    }

}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())