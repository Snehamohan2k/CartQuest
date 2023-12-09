import React from "react";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./LoginPage.scss"
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
     <div className="login-page">
        <div className="wrapper">
            <form action="">
                <h1>Begin your Quests!</h1>
                <div className="input-box">
                    <input type="text" placeholder="UserEmail" required></input>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required></input>
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"></input>
                        Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button className="login-button" type="submit">Login</button>
                <div className="registration">
                    <p>Don't have an account? <Link className="register-link" to="/register">Register Now</Link>
                    </p>
                </div>
            </form>
        </div>
        </div>
    )
}
export default LoginPage