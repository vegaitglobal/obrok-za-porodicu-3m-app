import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import NotFoundPage from "./components/pages/notFound/NotFoundPage";
import VolunteerActionsPage from "./components/pages/actions/VolunteerActionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/volunteer-action" element={<VolunteerActionsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
