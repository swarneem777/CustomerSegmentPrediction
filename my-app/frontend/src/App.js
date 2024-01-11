//Importing the necessary dependencies
import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { WineAttributesPage } from "./AttributeForm";
import { Logout } from "./Logout";
import logoImage from "./ABC.avif";

// Defining the App Component and currentform is set to login
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const renderImage = () => {
    if (currentForm === "login" || currentForm === "register") {
      return (
        <header>
           <h1>Customer Segment Prediction</h1>
          <img src={logoImage} alt="Website Logo" />
          <p>Unleash the Power of Data-driven Wine Consumer Insights and Elevate Your Business Growth with our State-of-the-Art Advanced Segmentation Tool</p>
        </header>
      );
    }
    return null;
  };


  //Logout functionality
  const handleLogout = () => {

    setCurrentForm("login"); // Switch back to the login form
  };

  //Rendering the forms
  const renderForm = () => {
    if (currentForm === "login") {
      return <Login onFormSwitch={toggleForm} />;
    } else if (currentForm === "register") {
      return <Register onFormSwitch={toggleForm} />;
    } else if (currentForm === "attribute") {
      return (
        <div>
          <WineAttributesPage />
          <Logout onFormSwitch={handleLogout} />
        </div>
      );
    }
  };


return (
  <div className="App">
    {renderImage()}
    {currentForm === "login" || currentForm === "register" ? (
      <div className="form-wrapper">
        {renderForm()}
      </div>
    ) : (
      renderForm()
    )}
  </div>
);
}
export default App;

