import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import ChecklistCT from "./pages/ChecklistCT";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="checklistCT" element={<ChecklistCT />} />
      </Routes>
    </>
  );
}
