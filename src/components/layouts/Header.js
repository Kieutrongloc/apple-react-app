import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className="header" id="header">
                <ul id="header-nav" className="none-address-style">
                    <li className="nav-res-pchide"><i className="fa-solid fa-bars"></i></li>
                    <li className="nav-res-mobile-show-appleicon"><a href="index.php" className="nav-icons"><i className="fa-brands fa-apple"></i></a></li>
                    <li className="nav-res-mobile-hide"><Link className="nav-items" to="/">Store</Link></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">Mac</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">iPad</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">iPhone</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">Watch</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">Airpods</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">TV & Home</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">Only on Apple</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">Accessories</a></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-items">Support</a></li>
                    <li className="nav-res-mobile-hide"><Link className="nav-items" to="/signin">Signin</Link></li>
                    <li className="nav-res-mobile-hide"><Link className="nav-items" to="/signup">Signup</Link></li>
                    <li className="nav-res-mobile-hide"><a href="" className="nav-icons"><i className="fa-solid fa-magnifying-glass"></i></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
