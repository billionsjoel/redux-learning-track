import { createStore } from 'redux';
import './App.css';

function App() {
	const defaultState = {
		state: 5,
	};

	const reducer = (state = defaultState, action) => {
		



		}
	};

	const store = createStore(reducer);




	return <div className="App">{store.getState().state}</div>;
}

export default App;
