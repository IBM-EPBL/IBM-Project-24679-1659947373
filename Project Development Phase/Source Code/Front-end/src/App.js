import './App.css';
import React,{useEffect} from 'react';
import LoginForm from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Inventory from './components/Inventory';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import DeleteForm from './components/DeleteForm';

function App() {
  useEffect(() => {
    document.title="Inventory Management System"
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='register' element={<RegistrationForm />}></Route>
        <Route path='inventory' element={<Inventory />}></Route>
        <Route path='aboutus' element={<AboutUs />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='/addform' element={<AddForm />}></Route>
        <Route path='/updateform' element={<UpdateForm />}></Route>
        <Route path='/deleteform' element={<DeleteForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
