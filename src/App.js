import Dashbord from "./components/Dashbord";
import Login from "./components/Login";
import ChecklistCT from "./components/ChecklistCT";
import Register from "./pages/Register";
import ChecklistLine from "./components/ChecklistLine";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="checklistCT" element={<ChecklistCT />} />
        <Route path="register" element={<Register />} />
        <Route path="checklistLine" element={<ChecklistLine />} />
      </Routes>
    </>
  );
}
