import {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from 'react-router-dom';
import Pic1 from '../assets/2.png';
import Svg1 from '../assets/3.svg';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(prev => prev + 1);
  return (
    <div>
      <Link to="/about">about</Link>
      <br/>
      <Link to="/shop">shop</Link>
      <div>PLATFORM={__PLATFORM__}</div>
      <h1 style={{color: 'blue'}}>counter: {counter}</h1>
      <div>
        <img width={100} height={100} src={Pic1} alt=""/>
      </div>
      <div>
        <Svg1 width={100} height={100}/>
      </div>
      <button className={classes.button} onClick={increment}>inc</button>
      <Outlet/>
    </div>
  );
};