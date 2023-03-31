import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailValidationPage from "./pages/EmailValidation.js";
import HomePage from "./pages/HomePage.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/email-validation'} element={<EmailValidationPage />} />
        <Route path={'/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
