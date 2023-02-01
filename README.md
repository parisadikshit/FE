# FE Learnings 

Part 2 : Redux

Store holds the state of your application
Action describes the changes in the state of your application
Reducer carries out the state transition depending on the action

The state of your whole application is stored in an object tree within a single store

The only way to change the state is to emit an action, an object describing what happened

Eg. Action - BUY_CAKE

{
	type: BUY_CAKE
}

To specify how the state tree is transformed by actions, you write the reducers

Reducer is the shop keeper

Const reducer = (state, action) =>{
	switch(action.type) {
	case BUY_CAKE: return {
	numOfCakes: state.numOfCakes - 1	
}

}
}


Responsibilities of a store:

-> Holds application state
-> Allows access to state via getState()
->  Allows state to be updated via dispatch(action)
-> Registers listeners via subscribe(listener)
-> Handles unregistering of listeners via the function returned by the listener
