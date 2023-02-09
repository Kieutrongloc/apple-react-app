import { Link } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

const Signin = () => {
    const showCart = useRef();
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const appleAccount = {
        'get': API_URL + 'sign-in/user-account-get.php',
        'post': API_URL + 'sign-in/user-account-post.php',
        'management': API_URL + 'user-management/user-management.php',
    }

    var alertMessage = document.getElementById("alert-message")
    const signInHandle = () => {
        let userId = document.getElementById("user-id").value
        let userPw = document.getElementById("user-pw").value
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
                        alertMessage.innerHTML="Please enter both fields";
                } else if (response && response.msg == 'no'){
                    alertMessage.innerHTML="Apple ID or password is invalid";
                } if (response && response.msg == 'ok'){
                    localStorage.setItem("user", JSON.stringify(response.user));
                    window.location.href= "http://localhost:3000/";
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            } 
        });
        console.log(data)
    }

    // Auto-direct to homepage if user is logged in already
    const directHome = () => {
        if (localStorage.getItem("user") !== null) {
            alert("Logged in successful. You should be directed to Apple Store")
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
                    <form id="section-input">
                        <input className="input-account" id="user-id" type="text" name="user" placeholder="Apple ID" />
                        <div ><input className="input-account" id="user-pw" type="password" name="password" placeholder="Password" />
                            {/* <input id="arrrow-login" type="submit" name="submit" /> */}
                            <div id="arrrow-login" onClick={signInHandle} href=""><FontAwesomeIcon icon={faCircleArrowRight}/></div>
                            <p id="alert-message"></p>
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