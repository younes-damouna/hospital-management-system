import FormWrapper from "./components/Forms/FormWrapper";
import LoginForm from "./components/Forms/LoginForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import "./styles/App.css";

import { useState } from "react";
import PatientDashboard from "./pages/PatientDatshboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Forms/Auth";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

function App() {
  const [menu, setMenu] = useState("doctor");
  // setMenu("admin");
  return (
    <>
      <div className="container">
      
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route
              path="/adminDashboard"
              element={<AdminDashboard menu={"admin"} />}
            />
             <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/doctorDashboard"
              element={<DoctorDashboard menu={"doctor"} />}
            />
            <Route
              path="/userDashboard"
              element={<PatientDashboard menu={""} />}
            />
              <Route
              path="/auth"
              element={<AuthPage />}
            />
          </Routes>
        </BrowserRouter>
       
       
      
      </div>

     
    </>
  );
}

export default App;
