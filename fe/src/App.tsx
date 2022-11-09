import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import NotFoundPage from "./components/pages/notFound/NotFoundPage";
import VolunteerActionsPage from "./components/pages/actions/VolunteerActionsPage";
import ActionTypesPage from "./components/pages/actionTypes/ActionTypesPage";
import SubscribersPage from "./components/pages/subscribers/SubscribersPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import DonationPage from "./components/pages/donation/DonationPage";
import NewsPage from "./components/pages/news/NewsPage";
import AboutUsPage from "./components/pages/aboutUs/AboutUsPage";
import BankAccountPage from "./components/pages/bankAccount/BankAccountPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/authType";
import { ToastContainer } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/volunteer-action-type" element={<ActionTypesPage />} />
        <Route path="/volunteer-action" element={<VolunteerActionsPage />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/subscribers" element={<SubscribersPage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/bank-account" element={<BankAccountPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
