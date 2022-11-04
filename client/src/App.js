// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Signup from "./Signup";
import WaterAccess from "./WaterAccess";
import Search from "./Search";
import NewAccess from "./NewAccess";
import Profile from "./Profile";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/access/:id" element={<WaterAccess />} />
        <Route path="/search" element={<Search />} />
        <Route path="/new_access" element={<NewAccess />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
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