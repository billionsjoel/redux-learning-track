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



		}
	};

	const store = createStore(reducer);




	return <div className="App">{store.getState().state}</div>;
}

export default App;
