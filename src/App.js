import { createStore } from 'redux';
import './App.css';

function App() {
	const defaultState = {
		state: 1,
	};

	const reducer = (state = defaultState, action) => {
		switch (action.type) {
			case 'INCREAMENT':
				return {
					state: 10,
				};
			case 'DECREAMENT':
				return {
					state: 1,
				};

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

	store.dispatch(
		defaultState > 5 ? setDecreamentAction() : setIncreamentAction()
	);

	return <div className="App">{store.getState().state}</div>;
}

export default App;
