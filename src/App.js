import { createStore } from 'redux';
import './App.css';

function App() {
	const reducer = (state = 5) => {
		return state;
	};
	const store = createStore(reducer);

	const setStateAction = () => {
		return {
			type: 'state',
		};
	};

	store.dispatch(setStateAction());

	return <div className="App">{store.getState()}</div>;
}

export default App;
