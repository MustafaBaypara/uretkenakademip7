import { useReducer } from 'react'
import { reducer, initialState } from './reducer.ts'
import './app.css'
function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickArttir = () => {
    dispatch({ type: "ARTTIR" });
  };
  
  const handleClickAzalt = () => {
    dispatch({ type: "AZALT" });
  };
  
  return (
    <div className='sayac'>
      <h1>Sayı: {state.count}</h1>
      <button onClick={handleClickArttir}>Arttır</button>
      <button onClick={handleClickAzalt}>Azalt</button>
    </div>
  )
  
}

export default App
