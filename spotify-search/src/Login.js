import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
        <div className="login-wrapper">
            <a className="login-link" href="http://localhost:8888">
                <button className="login-button">Login with Spotify</button>
            </a>
        </div>
    )
  }
}

export default Login;