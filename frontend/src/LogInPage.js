import React, { useState } from 'react'
import httpClient from './httpClient';
import './LogInPageLook.css'
import { useNavigate } from 'react-router-dom';

function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();  // useNavigate hook to navigate

    const handleSubmit = () => {
        navigate('/credit-list');
    };

    const logInUser = async () => {
        try {
            console.log(email, password);

            // Correcting the URL format
            const response = await httpClient.post("http://localhost:5000/login", {
                email,
                password,
            });

            console.log(response.data);

        }

        catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className='background'>
            <h1 className='titletext'>Log Into Your Account</h1>
            <form>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id=""
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id=""
                    />
                </div>
                <button type="button" onClick={() => handleSubmit()}>Submit</button>
            </form>
        </div>
    )
}

export default LogInPage