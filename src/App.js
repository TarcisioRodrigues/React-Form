
import {UserProvider}from "./Context/UserContext";
import { Home } from "./Pages/Home";
import { Show } from "./Pages/Show";
import { Login } from "./Pages/Login";

import {BrowserRouter,Route, Routes} from 'react-router-dom'

export const App=()=> {
  return (
  <UserProvider>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}  />
          <Route path="/home" element={<Home/>}  />
          < Route path="/show" element={<Show/>} />
      </Routes>
    </BrowserRouter>
 </UserProvider>
  
  );
}


