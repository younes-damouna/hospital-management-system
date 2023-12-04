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

function App() {
  const [menu, setMenu] = useState("doctor");
  // setMenu("admin");
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero/>
      <LoginForm/>
      <FormWrapper />
      </div>

      <div className="container d-flex gap">
        <DoctorDashboard menu={menu} />
      </div>

      <div className="container d-flex gap">
        <AdminDashboard menu={"admin"} />
      </div>
      <div className="container d-flex gap">
        <PatientDashboard menu={""} />
      </div>
    </>
  );
}

export default App;
