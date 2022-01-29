
import { Routes, Route } from "react-router-dom";
import Home from "./home"; 
import Login from "./login";
import Signup from "./signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/login" element={< Login/>}> </Route>
      <Route path="/signup" element={< Signup/>}> </Route>
    </Routes>
    

  );
}

export default App;
