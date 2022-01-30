
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login";
import Signup from "./pages/signup";
import AppState from "./context_reducer/state"

function App() {
  return (
    <AppState>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/login" element={< Login/>}> </Route>
      <Route path="/signup" element={< Signup/>}> </Route>
    </Routes>
    </AppState>

  );
}

export default App;
