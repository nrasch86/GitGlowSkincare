import { useState, useEffect } from 'react';
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import AuthService from "../utils/auth";

//import './Login.css';//
const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [login, { error, data }] = useMutation(LOGIN_USER);
useEffect(()=>{
  if(AuthService.loggedIn()|| data){
    navigate('/')
  }

}, [data, navigate])

    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const { data } = await login({
          variables: {email, password}
        }); 
        AuthService.login(data.login.token);
        navigate('/Home');
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
  
    
    const navigateToRegister = () => {
      navigate('/Signup');
    };

    return (
        <div className="LoginWrapper">
           
            <div className="LoginContainer">
                <h2 className="LoginTitle">Log in</h2>
                 {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
                <form onSubmit={handleLogin}>
                    <input
                        className="Input"
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        className="Input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className="LoginButton" type="submit">LOG IN</button>
                </form>
                <button className="SignUpButton" onClick={navigateToRegister}>SIGN UP</button>
            </div>
        </div>
    );
};

export default Login;