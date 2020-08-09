const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// ACTION
// Action creator
function buyCake() {
	// return Action (object with type)
	return {
		type: BUY_CAKE,
		info: 'Buy Cake Action',
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: 'Buy Ice Cream Action',
	};
}

// REDUCER
// (previousState, action) => newState
// const initialState = {
// 	numOfCakes: 10,
// 	numOfIceCreams: 20,
// };
const initialCakeState = {
	numOfCakes: 10,
};
const initialIceCreamState = {
	numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return {
// 				...state,
// 				numOfCakes: state.numOfCakes - 1,
// 			};

// 		default:
// 			return state;
// 	}
// };

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};
		default:
			return state;
	}
};

// combine REDUCER
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

// create redux STORE with initialState on REDUCER
// const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());

// SUBSCRIBE to execute callback func every time STORE is updated
const unsubscribe = store.subscribe(() => {});

// DISPATCH ACTION
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// UNSUBSCRIBE to cleanup
unsubscribe();
