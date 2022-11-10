// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Homepage from "./Homepage";
import WaterAccess from "./WaterAccess";
import Search from "./Search";
import NewAccess from "./NewAccess";
import Profile from "./Profile";
import Legal from "./Legal";
import MapView from './MapView'
import Rights from './Rights'

export const userContext = createContext()

function App() {
  const userStorage = sessionStorage.user_data ? JSON.parse(sessionStorage.user_data) : null
  const [user, setUser] = useState(userStorage)

  console.log(user)



  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/access/:id" element={<WaterAccess />} />
        <Route path="/search" element={<Search />} />
        <Route path="/new_access" element={<NewAccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/legal" element={<Legal />} />
        <Route path='/map_overview' element={<MapView />} />
        <Route path='/access_rights' element={<Rights />} />
      </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;



//original code from create-react-app
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;