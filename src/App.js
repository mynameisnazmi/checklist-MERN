import Dashbord from "./components/Dashbord";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashbord" element={<Dashbord />} />
      </Routes>
    </>
  );
}
