import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import ChecklistCT from "./pages/ChecklistCT";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import ChecklistLine from "./pages/ChecklistLine";
import ReviewSpc from "./pages/ReviewSpc";
import axios from "axios";

export default function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.headers.post["Content-Type"] = "application/json";
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="checklistCT" element={<ChecklistCT />} />
        <Route path="register" element={<Register />} />
        <Route path="checklistLine" element={<ChecklistLine />} />
        <Route path="reviewspc" element={<ReviewSpc />} />
      </Routes>
    </>
  );
}
