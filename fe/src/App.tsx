import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import NotFoundPage from "./components/pages/notFound/NotFoundPage";
import VolunteerActionsPage from "./components/pages/actions/VolunteerActionsPage";
import ActionTypesPage from "./components/pages/actionTypes/ActionTypesPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import DonationPage from "./components/pages/donation/DonationPage";
import NewsPage from "./components/pages/news/NewsPage";
import AboutUsPage from "./components/pages/aboutUs/AboutUsPage";
import BankAccountPage from "./components/pages/bankAccount/BankAccountPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/authType";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/volunteer-action" element={<VolunteerActionsPage />} />
      <Route path="/volunteer-action-type" element={<ActionTypesPage />} />
      <Route path="/contact" element={<ContactsPage />} />
      <Route path="/donation" element={<DonationPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/bank-account" element={<BankAccountPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
