import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from "react";
function App() {

  const weatherAPI = {
    key: "9d697a5570f8189811829f6eefe6e5c9",
    base: "https://api.openweathermap.org/data/2.5/",
  }
  
  const [isAuthenticated, userHasAuthenticated] = useState(false); //This is used to authenticate whether a user has successfully logged in
  //If after axios.post to the login route (in the logindetail.jsx file) is successfull then isAuthenticated = true and the Route to home is returned 

  return (
    <>
      <Routes>
      <Route
        path="/login"
        element={<Login userHasAuthenticated={userHasAuthenticated} />}
      />
        {isAuthenticated ? (
        <Route path="/home" element={<Dashboard />} /> //If user is legit they can use this route
      ) : (
        <Route path="*" element={<Navigate to="/login" />} /> //Otherwise they r redirected to login LOL
      )}
      </Routes>
    </>
  );
}

export default App;
