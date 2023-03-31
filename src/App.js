import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailValidationPage from "./pages/EmailValidation.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/email-validation'} element={<EmailValidationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
