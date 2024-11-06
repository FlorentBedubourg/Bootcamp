// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import PagePlayer from "./Page/pageplayer";
import PageGame from "./Page/pagegame";


function App() {
  const navigate = useNavigate;


  return (
  <>
  <h1>BlackJack</h1>
    <label>

      <label>
        Player 1: <input type="text" placeholder="Nom du joueur" /> <br />
        Player 2: <input type="text" placeholder="Nom du joueur" /> <br />
        Player 3: <input type="text" placeholder="Nom du joueur" /> <br />
        Player 4: <input type="text" placeholder="Nom du joueur" /> <br />
      </label>
    </label>
      <button onClick={() =>navigate("/")}>Play</button>
      <Routes>
        <Route path='/'  element={<PagePlayer />}></Route>
        <Route path='/game/:id'  element={<PageGame />}></Route>
      </Routes>
    </>
    );
}

export default App
