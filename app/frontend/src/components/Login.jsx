import axios from "axios"
import React, {useRef, useState} from "react"
import CreateAccount from "./CreateAccount";
import { useNavigate } from "react-router-dom";

function Login(userHasAuthenticated) {

    const navigate = useNavigate()

    const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false)

    // These will b used to set & change the password, username & login error (if occurs)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // This function will check upon submission if the users credentials r in the database,
    // If so, they will be re-directed to the home page, otherwise they will get a login error
    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
        };



        try {
            const response = await axios.post('http://localhost:5001/users/login', user); // Send POST request to /login via axios
            console.log("logging in")
            console.log('Login successful:', response.data.message);
            setLoginError(null); // Reset any previous login error
            // Redirect the user to a new page on successful login
            userHasAuthenticated(true)
            // change this to navigate
            navigate('/home')
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Invalid username or password');
        }

        console.log(user);
    }


    return (
        <>
        {!isCreateAccountOpen && (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Log in</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={handlePasswordChange}
          />
        </div>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        onClick={handleSubmit}>
          Log in
        </button>
        <div>
             Don't have an account?  
             <span className="ml-2 text-blue-500 hover:text-blue-700 underline hover:no-underline cursor-pointer" onClick={() => setIsCreateAccountOpen(true)}>Create one</span>
        </div>
      </div>
    </div>
        )}
        {isCreateAccountOpen && (
                <CreateAccount setIsCreateAccountOpen={setIsCreateAccountOpen} id='CreateAccount' />
            )}
    </>
    );
}

export default Login