import { Link } from "react-router-dom";

const Signin = () => {
    const directHome = () => {
        if (localStorage.getItem("user") !== null) {
            alert("Logged in successful. You should be directed to Apple Store")
            window.location.href="/home";
          }
    }
    directHome()
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const appleAccount = {
        'get': API_URL + 'sign-in/user-account-get.php',
        'post': API_URL + 'sign-in/user-account-post.php',
        'management': API_URL + 'user-management/user-management.php',
    }



    return (
        <>
            <section>
                <h1>Sign in for faster checkout.</h1>
                <div id="section-centered">
                    <h2>Sign in to Apple Store</h2>
                    <form id="section-input">
                        <input className="input-account" id="user-id" type="text" name="user" placeholder="Apple ID" />
                        <div ><input className="input-account" id="user-pw" type="password" name="password" placeholder="Password" />
                            <div id="arrrow-login" href=""><i className="fa-solid fa-circle-arrow-right"></i></div>
                            <p id="alert-message"></p>
                        </div>
                    </form>
                    <div id="remember-me">
                        <input type="checkbox" name="remember" value="remember" checked />
                        <label id="rememberMe" for="remember">Remember me</label> <br />
                    </div>
                    <Link className="none-address-style" id="forgot-pw" to="/">Forgot Apple ID or password? <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <p>Don't have an Apple ID? <Link className="none-address-style"  to="/signup">Create yours now. <i className="fa-solid fa-arrow-up-right-from-square"></i></Link></p>
                </div>
            </section>
        </>
    )
}

export default Signin