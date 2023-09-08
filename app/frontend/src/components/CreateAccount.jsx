import React, {useRef, useState} from "react"
import axios from "axios"


function CreateAccount() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [createError, setCreateError] = useState(null);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password,
        };
        try {

            const response = await axios.post('http://localhost:5001/users/create', user); // Send POST request to /login via axios
            console.log("Creating account")
            console.log('Account creation successful:', response.data.message);
            setCreateError(null); // Reset any previous login error
            // Redirect the user to a new page on successful login
        
            // change this to navigate
            window.location.href = '/home';
        } catch (error) {
            console.error('Account could not be created: ', error);
            setCreateError('Creation of Account failed');
        }

        console.log(user);
    }


    return (


        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Create Account</h2>
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
            Create Account
        </button>
      </div>
    </div>
    );
}

export default CreateAccount