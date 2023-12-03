import AsideMenu from './components/Menus/AsideMenu';
import FormWrapper from './components/Forms/FormWrapper';
import LoginForm from './components/Forms/LoginForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './styles/utilities.css';
import Panel from './components/Panels';
import { useState } from 'react';

function App() {
  const [menu,setMenu]=useState("");
  // setMenu("admin");
  return (<><div className="container">
      <Navbar />
      {/* <Hero/>
      <LoginForm/>
      <FormWrapper /> */}
    </div>
    <div className="container d-flex gap">
      <AsideMenu  menu={menu}/>
      <Panel menu={menu} />      

    </div>
    </>
    
  );
}

export default App;
