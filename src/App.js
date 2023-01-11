import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import ChecklistCT from "./pages/ChecklistCT";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import ChecklistLine from "./pages/ChecklistLine";
import ReviewSpecific from "./pages/ReviewSpecific";

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
        <Route path="reviewspecific" element={<ReviewSpecific />} />
      </Routes>
    </>
  );
}
