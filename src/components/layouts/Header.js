import { Link } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
    const showCart = useRef();
    const getUserData = () => {
        const userPanel = document.querySelector('#nav-res-mobile-show-bag')
        if (localStorage.getItem("user") == null){
            showCart.style.display='block'
        } else {
            let userFname = JSON.parse(window.localStorage.getItem('user')).first_name;
            let userLname = JSON.parse(window.localStorage.getItem('user')).last_name;
            
        }
        console.log(localStorage.getItem("user"), showCart)
    }
    getUserData()

    const showSubnav = () => {
        const x = document.querySelector("#subnav-cart-checkout");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
        }

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
                    <li ref={showCart} id="nav-res-mobile-show-bag" style={{position:'relative', display:'block'}}><div href="" className="nav-icons" id="nav-icons-bag" onClick={showSubnav}><img id="user-avatar" src="" alt="avatar"/></div>
                    <p className="cart-quantity-at-bag" onClick={showSubnav}></p>
                    <div id="subnav-cart-checkout">
                        <div className="cart-checkout-table">
                            <div className="cart-checkout-table-item">
                            </div>
                            <div className="subnav-line-through"></div>
                            <p className="subnav-checkout-total"><span className="subnav-checkout-total-number">No item in your cart</span></p>
                            <a href="" className="subnav-checkout">Check out</a>
                        </div>
                        <ul className="subnav-checkout-list">
                            <li className="subnav-select-list"><div className="subnav-list-address hover-underline">
                                <i className="subnav-list-icon fa-solid fa-suitcase"></i><a className="subnav-list-address hover-underline" href="">Bag<span className="checkout-quantity"></span></a>
                            </div></li>
                            <li className="subnav-select-list"><div className="subnav-list-address hover-underline">
                                <i className="subnav-list-icon fa-solid fa-tag"></i><a className="subnav-list-address hover-underline" href="">Saved Items</a>
                            </div></li>
                            <li className="subnav-select-list"><div className="subnav-list-address hover-underline">
                                <i className="subnav-list-icon fa-solid fa-box"></i><a className="subnav-list-address hover-underline" href="">Orders</a>
                            </div></li>
                            <li className="subnav-select-list"><div className="subnav-list-address hover-underline">
                                <i className="subnav-list-icon fa-solid fa-gear"></i><a className="subnav-list-address hover-underline" href="http://localhost/www/manage_product/Apple-Store-Management-site/accessories-manage/">Manage Products</a>
                            </div></li>
                            <li className="subnav-select-list"><div className="subnav-list-address hover-underline">
                                <i className="subnav-list-icon fa-solid fa-gear"></i><a className="subnav-list-address hover-underline" id="user-manage" href=""></a>
                            </div></li>
                            <li className="subnav-select-list-last"><div className="subnav-list-address hover-underline">
                                <i className="subnav-list-icon fa-solid fa-user"></i><a className="subnav-list-address hover-underline" id="login-user" href="sign-in.php"></a>
                            </div></li>
                        </ul>
                    </div>
                </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
