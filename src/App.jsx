import AsideMenu from "./components/Menus/AsideMenu";
import FormWrapper from "./components/Forms/FormWrapper";
import LoginForm from "./components/Forms/LoginForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./styles/utilities.css";
import Panel from "./components/Panels";
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
        {/* <Hero/>
      <LoginForm/>
      <FormWrapper /> */}
      </div>

      <div className="container d-flex gap">
        {/* <AsideMenu  menu={menu}/> */}
          {/* <PatientDashboard menu={menu}/> */}
          <DoctorDashboard menu={menu}/>
      </div>

      <div className="container d-flex gap">
        <AdminDashboard menu={"admin"}/>
</div>
<div className="container d-flex gap">
        <PatientDashboard menu={"patient"}/>
</div>
    </>
  );
}

export default App;
