//Importing dependencies
import React from "react";
import { useState } from "react";

//Initializing the states
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and process the registration data
    // Get the existing stored registrations from local storage
    const storedRegistrations = localStorage.getItem("registrations");
    let registrations = storedRegistrations ? JSON.parse(storedRegistrations) : [];
    
    const emailExists = registrations.some((registration) => registration.email === email);
    if (emailExists) {
      setErrorMessage("Email already registered. Please use a different email.");
      return;
    }

    
    // Store the registration data in local storage
    const registrationData = {
        name: name,
        email: email,
        password: password,
        };

    // Update the registrations array with the new registration data
    registrations.push(registrationData);

    // Store the updated registrations array in local storage
    localStorage.setItem("registrations", JSON.stringify(registrations));

    // Switch to the login page
    props.onFormSwitch("login");
};

//Container for registration form
  return (
    <div className="form-wrapper">
    <div className="auth-form-container register-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Taking Full name */}
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Full Name"
          id="name"
          name="name"
          required
        />

        {/* Taking Email */}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="xyz@gmail.com"
          id="email"
          name="email"
          required
        />

        {/* Setting up password */}
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Register</button> 
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login
      </button>
    </div>
    </div>
  );
};
