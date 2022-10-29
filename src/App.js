import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state)

  return (
    <div className="App">
      Hello
      <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
      {counter}
      <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    </div>
  );
}

export default App;
