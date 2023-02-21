import { Link } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const userIdInput = useRef(null);
    const userPwInput = useRef(null);
    const alertMessage = useRef(null);
    const navigate = useNavigate();
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const appleAccount = {
        'get': API_URL + 'sign-in/user-account-get.php',
        'post': API_URL + 'sign-in/user-account-post.php',
        'management': API_URL + 'user-management/user-management.php',
    }

    const signInHandle = (event) => {
        event.preventDefault();
        let userId = userIdInput.current.value
        let userPw = userPwInput.current.value
        const data = {
            email: userId,
            password: userPw,
        }
        $.ajax({
            url : appleAccount.post,
            type : 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                if (userId=='' || userPw==''){
                        alertMessage.current.innerHTML="Please enter both fields";
                } else if (response && response.msg == 'no'){
                    alertMessage.current.innerHTML="Apple ID or password is invalid";
                } if (response && response.msg == 'ok'){
                    localStorage.setItem("user", JSON.stringify(response.user));
                    window.location.href="http://localhost:3000/";
                    // navigate('/');
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            } 
        });
    }

    // Auto-direct to homepage if user is logged in already
    const directHome = () => {
        if (localStorage.getItem("user") !== null) {
            window.location.href="http://localhost:3000/";
        }
    }
    directHome()

    return (
        <>
            <section>
                <h1>Sign in for faster checkout.</h1>
                <div id="section-centered">
                    <h2>Sign in to Apple Store</h2>
                    <form id="section-input" onSubmit={signInHandle}>
                        <input ref={userIdInput} className="input-account" id="user-id" type="text" name="user" placeholder="Apple ID" />
                        <div>
                            <input ref={userPwInput} className="input-account" id="user-pw" type="password" name="password" placeholder="Password" />
                            <input style={{display:'none'}} id="arrrow-login" type="submit" name="submit"/>
                            <div id="arrrow-login" onClick={signInHandle} href=""><FontAwesomeIcon icon={faCircleArrowRight}/></div>
                            <p ref={alertMessage} id="alert-message"></p>
                        </div>
                    </form>

                    <div id="remember-me">
                        <input type="checkbox" name="remember" value="remember" defaultChecked />
                        <label id="rememberMe" htmlFor="remember">Remember me</label> <br />
                    </div>
                    <Link className="none-address-style" id="forgot-pw" to="/">Forgot Apple ID or password? <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <p>Don't have an Apple ID? <Link className="none-address-style"  to="/signup">Create yours now. <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></p>
                </div>
            </section>
        </>
    )
}

export default Signin