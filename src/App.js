import Login from "./components/Login";
import Register from "./components/Register";
import Dashbord from "./components/Dashbord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* register list of link */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashbord" element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default App;
