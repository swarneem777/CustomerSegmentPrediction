import React, { useState } from "react";

//Initializing the states
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    // Get the stored registrations from local storage
    const storedRegistrations = localStorage.getItem("registrations");
    const registrations = storedRegistrations ? JSON.parse(storedRegistrations) : [];
  
    // Check if the entered credentials match any of the registered entries
    const matchedRegistration = registrations.find(
      (registration) => email === registration.email && password === registration.password
    );
  
    if (matchedRegistration) {
      // Redirect to attribute form
      props.onFormSwitch("attribute");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };
  

return (
  <div className="form-wrapper">
    <div className="auth-form-container login-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/*For entering email*/}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        {/*For entering email*/}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit">Log In</button>
        <button className="link-btn">
        Forgot Password?
      </button>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="link-btn" onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
    </div>
  </div>
  );
};