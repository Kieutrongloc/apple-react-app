import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

const Section5 = ({productsAccessories}) => {

    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const cartAPI = {
        'save': API_URL + 'cart/cart-save.php',
    }
    //Wanna import entire this to Home.js
     //Add product to cart
    const navigateSignIn = useNavigate();
    const addToCart = (id, image, name, price) => {
        localStorage.getItem("user") === null
        ? window.confirm('Please login your Apple ID to add to cart') && navigateSignIn('./signin')
        : addCartHandle(id, image, name, price)
    }

    const addCartHandle = (id, image, name, price) => {
        const data = {
            id: id,
            name: name, 
            price: price,
            image: image,
            userid: JSON.parse(window.localStorage.getItem('user')).id,
        }
        const response = fetch(cartAPI.save, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
          });
          response.json().then(function(data){
            window.getCartItems(data)
          })
        
    }

    
    return (
        <>
            <div className="main-fourth-accessories">
            <h2 className="main-header">Accessories. <span className="header-details">Essentials that pair perfectly with your favorite devices</span></h2>
            <div className="fourth-accessories-nav overflow-hidden main-fourth-carousel">

                <div className="fourth-accessories-nav-box hover-style">
                    <div className="accessories-nav-item-main">
                        <h3 className="accessories-nav-item-header">In with the new.</h3>
                        <p className="accessories-nav-item-detail">Discover fresh new colors for your favorite accessories</p>
                    </div>
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-new-accessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052150646" 
                    alt="" className="accessories-nav-item-img-larger border-radius-shadow" />
                </div>

                {productsAccessories.map((item) => 
                    <div key={item.id}>
                        <div style={{height:'500px'}} className="accessories-nav-item border-radius-shadow hover-style">
                        <FontAwesomeIcon onClick={() => addToCart(item.id, item.image, item.name, item.price)} className='add-cart-btn' icon={faCartPlus}/>
                        <img src={item.image} alt="" className="accessories-nav-item-img" />
                        <div className="fourth-accessory-nav-box">
                            <p className="nav-item-accessories-status">{item.status}</p>
                            <p className="accessories-nav-item-name">{item.name}</p>
                            <p className="accessories-nav-item-price"><span>$</span>{item.price}</p>
                        </div>
                    </div>
                </div> 
                )}

                </div>
            </div>
        </>
    )
}

export default Section5