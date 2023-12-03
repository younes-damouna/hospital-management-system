import FormWrapper from './components/Forms/FormWrapper';
import LoginForm from './components/Forms/LoginForm';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './styles/utilities.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <LoginForm/>
      <FormWrapper />
    </div>
  );
}

export default App;
