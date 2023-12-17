import {useState} from 'react';
import classes from './App.module.scss';

export const App = () => {
	const [counter, setCounter] = useState(0);
	const increment = () => setCounter(prev => prev + 1);
	return (
		<div>
			<h1>counter: {counter}</h1>
			<button className={classes.button} onClick={increment}>inc</button>
		</div>
	)
}