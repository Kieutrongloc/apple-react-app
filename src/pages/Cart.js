import { Link } from "react-router-dom";
// import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import '../assets/css/cart.css';
// import { useNavigate } from 'react-router-dom';

const Cart = () => {
    // Auto-direct to homepage if user is logged in already
    const directHome = () => {
        if (localStorage.getItem("user") === null) {
            window.location.href="http://localhost:3000/";
        }
    }
    directHome();

    // Delete user from localStorage when clicking signOut
    const signOut = () => {
        window.localStorage.removeItem('user')
        window.location.href="/"
    }
    
    //Render cart items
    const [Cart, setCart] = useState([]);
    useEffect(() => {
        const getCart = async () => {
            await fetch('http://localhost/www/AppleStore/Backend/cart/cart-get.php/?user_id='+JSON.parse(window.localStorage.getItem('user')).id)
            .then(res => res.json())
            .then(
                (result) => {
                    setCart(result.reverse());
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        getCart()
    }, [])


    //Filtered cart when click search
    const [inputSearch, setInputSearch] = useState('');
    const [filteredCart, setFilteredCart] = useState(null);
    const submitSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchItem = formData.get('search-item');
    setInputSearch(searchItem);
    const filteredItems = Cart.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
    setFilteredCart(filteredItems);
    }

    // Handle check all input
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    
    const handleCheckAll = (event) => {
        setIsCheckedAll(!isCheckedAll);
        const checkboxes = event.target.parentElement.parentElement.parentElement.querySelectorAll('#body-content input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = !isCheckedAll;
        });
        setIsChecked(!isCheckedAll);
    }; 
    console.log(isCheckedAll, isChecked)

    // Handle check single item
    const [isCheckedItem, setIsCheckedItem] = useState(false);
    const checkProduct = (event) => {
        const checkbox = event.target;
        checkbox.checked = !isCheckedItem;
        setIsCheckedItem(!isCheckedItem);
    }
    console.log(isCheckedItem);

    // Calculate total item in the cart:
    var cartTotalItem;
    var cartTotalPrice;
    const totalCart = () => {
        cartTotalItem = Cart.reduce(
            (prevValue, currentValue) => prevValue + parseInt(currentValue.quantity),0
        );
        cartTotalPrice = Cart.reduce(
            (prevValue, currentValue) => prevValue + parseInt(currentValue.quantity*currentValue.price),0
        );
    }
    totalCart();

   

    return (
        <>
            <div id="cart-header">
                <div className="section-header">
                    <div className="section-header-nav">
                        <h2 style={{fontWeight: 'lighter'}}>Apple ID</h2>
                        <div className="header-nav-item">
                            <Link onClick={signOut} style={{color:'#666'}} className="none-address-style" href="">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cart-body">
                <form onSubmit={(event)=> submitSearch(event)}>
                    <input type={'text'} name={'search-item'} placeholder={'Enter your item to search...'} ></input>
                    <button type="submit" name={'submit-search'}>
                        <FontAwesomeIcon icon={faSearch} id="fa-search"/>
                    </button>
                </form>

                <div id="body-title">
                    <input style={{visibility:'hidden'}} type={'checkbox'} name={'check-all'}></input>
                    <p>Products</p>
                    <p className="title-bar">Price</p>
                    <p className="title-bar">Quantity</p>
                    <p className="title-bar">Total</p>
                    <p className="title-bar">Action</p>
                </div>

                {Cart.length!==0 && filteredCart===null ?
                Cart.map((item) => 
                <div key={item.id} id="body-content">
                    <input type={'checkbox'} defaultChecked={isCheckedAll} onChange={checkProduct} name={'check-item'}></input>
                    <div id="content-item">
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                    <p>${item.price}.00</p>
                    <input type={'number'} defaultValue={item.quantity} min={1}></input>
                    <p>${Number(item.price)*Number(item.quantity)}.00</p>
                    <button>Remove</button>
                </div>
                ) :
                Cart.length===0 && filteredCart===null ?
                <div className="body-message"><p>Nothing in your cart</p></div> :
                filteredCart!==null && filteredCart.length>0 ?
                filteredCart.map((item) => 
                <div key={item.id} id="body-content">
                    <input type={'checkbox'} defaultChecked={isCheckedAll} onChange={checkProduct} name={'check-item'}></input>
                    <div id="content-item">
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                    <p>${item.price}.00</p>
                    <input type={'number'} defaultValue={item.quantity} min={1}></input>
                    <p>${Number(item.price)*Number(item.quantity)}.00</p>
                    <button>Remove</button>
                </div>
                ) :
                <div className="body-message"><p>No item matched your search</p></div>
                }

                <div id="body-checkout">
                    <div id="checkout-left">
                        <input onChange={handleCheckAll} type={'checkbox'} name={'check-all'}></input>
                        <label htmlFor="check-all">Select all the product</label>
                        <p>{cartTotalItem} item(s)</p>
                    </div>
                    <div id="checkout-right">
                        <p>Total cart: ${cartTotalPrice}.00</p>
                        <button>Check out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart