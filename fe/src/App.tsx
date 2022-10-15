import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import NotFoundPage from "./components/pages/notFound/NotFoundPage";
import VolunteerActionsPage from "./components/pages/actions/VolunteerActionsPage";
import ActionTypesPage from "./components/pages/actionTypes/ActionTypesPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/volunteer-action" element={<VolunteerActionsPage />} />
      <Route path="/volunteer-action-type" element={<ActionTypesPage />} />
      <Route path="/contact" element={<ContactsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
