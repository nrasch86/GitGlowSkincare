import { useState, useEffect, useMutation } from 'react';
import { useNavigate } from 'react-router-dom';
//import './Login.css';//
const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [login, { error, data }] = useMutation(LOGIN_USER);
useEffect(()=>{
  if(Auth.loggedIn()|| data){
    navigate('/')
  }

}, [data, navigate])

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const { data } = await login({variables: {email: email, password: password}}); 
 
        Auth.login(data.login.token);
        
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="Input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="LoginButton" type="submit">LOG IN</button>
                </form>
                <button className="SignUpButton" onClick={navigateToSignup}>SIGN UP</button>
            </div>
        </div>
    );
};

export default Login;