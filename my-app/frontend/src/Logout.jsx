    import React from "react";
    import "./App.css"
    export const Logout = ({onFormSwitch}) => {
    const handleLogout = () => {
    
        localStorage.removeItem("userToken"); 
        // Redirect to the login page
        onFormSwitch("login");
    };

    return (
        <div className="logout-container">
        <button className="link-btn logout-button" onClick={() => handleLogout("login")}>
        Logout
        </button>
        </div>
    );
    };