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

	const setStateAction = () => {
		return {
			type: 'CHANGE',
		};
	};

	store.dispatch(setStateAction());

	return <div className="App">{store.getState()}</div>;
}

export default App;
