const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const BUY_CAKE = 'BUY_CAKE'; 
const BUY_ICECREAM = 'BUY_ICECREAM';

// action creater 
// it is the one who returns an action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
    
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
    
}
// reducer 
// (previousState, action) => newState

const initialState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCreams:20
}

const reducer = (state = initialState, action)=>{
    switch(action.type){

        case  BUY_CAKE : return {
            ...state, 
            numOfCakes: state.numOfCakes - 1 
        }

        default: return state
    }
     
}
const IceCreamreducer = (state = initialIceCreamState, action)=>{
    switch(action.type){

        case  BUY_ICECREAM : return {
            ...state, 
            numOfIceCreams: state.numOfIceCreams - 1 
        }

        default: return state
    }
     
}

const rootReducer = combineReducers({
    reducer:reducer,
    IceCreamReducer:IceCreamreducer
});

const store = createStore(rootReducer);
console.log('state', store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState())); 
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
