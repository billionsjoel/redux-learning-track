import { createStore } from 'redux';
import './App.css';

function App() {
	const INCREAMENT = 'INCREAMENT';
	const DECREAMENT = 'DECREAMENT';

	const defaultState = {
		state: 10,
	};

	const reducer = (state = defaultState, action) => {
		switch (action.type) {
			case INCREAMENT:
				return {
					state: 10,
				};
			case DECREAMENT:
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
			type: INCREAMENT,
		};
	};
	const setDecreamentAction = () => {
		return {
			type: DECREAMENT,
		};
	};

	store.subscribe(() => {
		console.log('subscription called');
	});

	store.dispatch(
		defaultState.state > 5 ? setDecreamentAction() : setIncreamentAction()
	);

	return <div className="App">{store.getState().state}</div>;
}

export default App;
