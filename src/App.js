import { createStore } from 'redux';
import './App.css';

function App() {
	const defaultState = {
		state: 5,
	};

	const reducer = (state = defaultState, action) => {
		switch (action.type) {
			case 'INCREAMENT':
				return {
					state: 10,
				};
				break;
			case 'DECREAMENT':
				return {
					state: 1,
				};
				break;

			default:
				return defaultState;
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

	return <div className="App">{store.getState().state}</div>;
}

export default App;
