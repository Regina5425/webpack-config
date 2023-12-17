import {useState} from 'react';
import './App.scss';

export const App = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => setCounter(prev => prev + 1);
	return (
		<div>
			<h1>counter: {counter}</h1>
			<button onClick={increment}>inc</button>
		</div>
	)
}