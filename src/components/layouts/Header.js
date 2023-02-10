import React, { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faTag, faBox, faGear, faUser} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const showCart = useRef();
    const headerNav = [
    {id: 1, title:'Store', link: ''},
    {id: 2, title:'Mac', link: ''},
    {id: 3, title:'Ipad', link: ''},
    {id: 4, title:'iPhone', link: ''},
    {id: 5, title:'Watch', link: ''},
    {id: 6, title:'Airpods', link: ''},
    {id: 7, title:'TV & Home', link: ''},
    {id: 8, title:'Only on Apple', link: ''},
    {id: 9, title:'Accessories', link: ''},
    {id: 10, title:'Support', link: ''},
    {id: 11, title:'SignIn', link: '/signin', display: 'none'},
    {id: 12, title:'SignUp', link: '/signup', display: 'none'}];
    const filteredHeaderNav = localStorage.getItem("user") !== null ? headerNav.filter(item => item.display !== 'none') : headerNav;
    
    const checkoutList = [
    {id: 1, icon: faSuitcase, title:'Bag', link: ''},
    {id: 2, icon: faTag, title:'Saved Item', link: ''},
    {id: 3, icon: faBox, title:'Orders', link: ''},
    {id: 4, icon: faGear, title:'Manage Products', link: ''},
    {id: 5, icon: faGear, title:'x', link: ''},
    {id: 6, icon: faUser, title:'x', link: ''}]
    
    const getUserData = () => {
        {localStorage.getItem("user") === null
        ?
        console.log('not yet')
        :
        console.log('')
        }
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
                    {/* <li className="nav-res-pchide"><i className="fa-solid fa-bars"></i></li> */}
                    {/* <li className="nav-res-mobile-show-appleicon"><a href="index.php" className="nav-icons"><i className="fa-brands fa-apple"></i></a></li> */}

                    {filteredHeaderNav.map(item =>
                    <li key={item.id} className="nav-res-mobile-hide">
                        <Link className="nav-items" to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                    )}
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
                                {checkoutList.map(item =>
                                    <li className="subnav-select-list"><div className="subnav-list-address hover-underline"></div>
                                    <Link className="subnav-list-address hover-underline" to=''>
                                        <FontAwesomeIcon style={{paddingRight:'16px'}} icon={item.icon}/>
                                        {item.title}
                                    </Link>
                                </li>
                                )}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
