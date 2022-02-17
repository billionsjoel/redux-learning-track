import { createStore } from 'redux';
import './App.css';

function App() {
	const defaultState = {
		state: 5,
	};

	const reducer = (state = defaultState, action) => {
		if (action.type === 'CHANGE') {
			return {
				state: 10,
			};
		} else {
			return state;
		}
	};

	const store = createStore(reducer);

	const setIncreamentAction = () => {
		return {
			type: 'INCREAMENT',
		};
	};
	const setDecreamentAction = () => {
		return {
			type: 'DECREAMENT',
		};
	};

	//store.dispatch(setStateAction());

	return <div className="App">{store.getState().state}</div>;
}

export default App;
