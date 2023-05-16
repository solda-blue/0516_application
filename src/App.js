import { useState } from 'react';
import './App.css';
import MemoComp from './components/MemoComp';
import LikeComp from './components/LikeComp';

function App() {
  const [tab, setTab] = useState(true);
  return (
    <div className="App">
      <button onClick={() => {setTab(true)}}>메모장</button>
      <button onClick={() => {setTab(false)}}>좋아요</button>
      {tab ?
      <MemoComp /> :
      <LikeComp />
    }
      
    </div>
  );
}

export default App;
