import React, { json, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faTag, faBox, faGear, faUser, faSignOut} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    //API
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const cartAPI = {
        'get': API_URL + 'cart/cart-get.php',
        'save': API_URL + 'cart/cart-save.php',
        'delete': API_URL + 'cart/cart-delete.php',
        'update': API_URL + 'cart/cart-update.php',
        // 'loudandclear': API_URL + 'accessories-manage/loudandclear-get.php',
    }
    
    //Render cart
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const getCartItems = async () => {
            await fetch(cartAPI.get + '/?user_id=' + JSON.parse(window.localStorage.getItem('user')).id)
            .then(res => res.json())
            .then(
              (result) => {
                // console.log(result);
                setCartItems(result);
              },
              (error) => {
                // console.log(error);
              }
            )
        };
        getCartItems()
        window.getCartItems = getCartItems
    }, [])

    // Delete user from localStorage when clicking signOut
    const signOut = () => {
        window.localStorage.removeItem('user')
        window.location.href="/"
    }
    
    // Header navigation array 
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
    
    //Checkout item array
    const checkoutList = 
    localStorage.getItem("user") !== null 
    ? [
    {id: 1, icon: faSuitcase, title:'Bag', link: ''},
    {id: 2, icon: faTag, title:'Saved Item', link: ''},
    {id: 3, icon: faBox, title:'Orders', link: ''},
    {id: 4, icon: faGear, title:'Manage Products', link: ''},
    {id: 5, icon: faUser, title: JSON.parse(window.localStorage.getItem('user')).first_name + ' ' + JSON.parse(window.localStorage.getItem('user')).last_name, link: ''},
    {id: 6, icon: faSignOut, title:'Log out', link: '', onclick: signOut}] : [];
    
    // Show cart/checkoutlist if user is logged in 
    const showCart = useRef(null);
    const cartQuantity = useRef(null)
    const userAvatar = useRef(null)
    useEffect(() => {
        localStorage.getItem("user") === null 
        ?
        showCart.current.style.display = 'none'
        :
        getUserData()
        cartQuantity.current.innerHTML = 'You have xxx item(s) in your cart'
    }, [])

    // userAvatar.current.src = JSON.parse(window.localStorage.getItem('user')).avatar_link;


    const getUserData = () => {
        {localStorage.getItem("user") === null
        ?
        console.log('get user data test true')
        :
        console.log('get user data test false')
        }
    }

    //Show cart/checkoutlist on click
    const showSubnav = () => {
        const cart = document.querySelector("#subnav-cart-checkout");
        if (cart.style.display === "block") {
            cart.style.display = "none";
        } else {
            cart.style.display = "block";
        }
        }
    
    //Remove item from cart on click
    const removeItem = (id) => {
        let userID = JSON.parse(window.localStorage.getItem('user')).id
        var options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        fetch(cartAPI.delete +'/?id=' + id + '&user_id=' + userID, options)
            .then(function(cartresponse) {
                cartresponse.json().then(function(data){
                    window.getCartItems(data)
                  })
            })
            .then(function() {
            });
    }

    //Update quantity at cart onchange:
    const updateQuantity = (event, id) => {
        var options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };
        fetch(cartAPI.update +'/?id=' + id +'&quantity=' + event.target.value, options)
            .then(function(cartresponse) {
                cartresponse.json().then(function(data){
                    window.getCartItems(data)
                  })
            })
            .then(function() {
        });
    }

    // Calculate total item in the cart:
    const quantityAtBag = useRef(null)
    const totalCart = () => {
        var total = cartItems.reduce(
            (prevValue, currentValue) => prevValue + parseInt(currentValue.quantity),0
        );
    }
    console.log()
    totalCart()

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

                    <li ref={showCart} id="nav-res-mobile-show-bag" style={{position:'relative', display:'block'}}><div href="" className="nav-icons" id="nav-icons-bag" onClick={showSubnav}><img ref={userAvatar} id="user-avatar" src={''} alt="avatar"/></div>
                        <p ref={quantityAtBag} className="cart-quantity-at-bag" onClick={showSubnav}></p>
                        <div id="subnav-cart-checkout">
                            <div className="cart-checkout-table">
                                {cartItems.map((item) =>
                                <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '10px'}} className="subnav-item-list">
                                    <img src={item.image} alt="" class="checkout-item-img"></img>
                                    <div className="cart-checkout-item-list">
                                        <div style={{display: 'flex'}}>
                                            <p style={{color:'black' }}className="checkout-item-name">{item.name}</p>
                                        </div>
                                        <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                            <input onChange={(event) => updateQuantity(event, item.id)} style={{maxWidth: '40px'}} type="number" defaultValue={item.quantity} min={1} class="checkout-item-qtt"></input>
                                            <p style={{color:'black'}} className="checkout-item-price"><span>$</span><span className="checkout-item-pricenumber">{Number(item.price)*Number(item.quantity)}</span></p>
                                        </div>
                                    </div>
                                    <p style={{color:'red', margin: '20px 0px', cursor: 'pointer'}} className="checkout-item-remove" onClick={() => removeItem(item.id)}>Remove</p>
                                </div>
                                )}
                                    <div>
                                        <div className="subnav-line-through"></div>
                                        <p ref={cartQuantity} className="subnav-checkout-total">No item in your cart</p>
                                        <a href="" className="subnav-checkout">Check out</a>
                                    </div>
                            </div>
                            <ul className="subnav-checkout-list">
                                {checkoutList.map(item =>
                                    <li key={item.id} className="subnav-select-list"><div className="subnav-list-address hover-underline"></div>
                                    <Link className="subnav-list-address hover-underline" to='' onClick={item.onclick}>
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
