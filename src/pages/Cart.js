import { Link } from "react-router-dom";
// import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import $ from 'jquery';
import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/cart.css';
// import { useNavigate } from 'react-router-dom';

const Cart = () => {
    
    //Render cart items
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            await fetch('http://localhost/www/AppleStore/Backend/cart/cart-get.php/?user_id='+JSON.parse(window.localStorage.getItem('user')).id)
            .then(res => res.json())
            .then(
                (result) => {
                    setOrders(result.reverse());
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        getOrders()
    }, [])   
    function handleOnchange(event){
        //console.log(orders);
        console.log(event.target.name, event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        const index = name.substr(name.length - 1)
        const newOrders = orders;
        newOrders[index].quantity = value;
        console.log('newOrders', newOrders)
        //setOrders(newOrders);
        setOrders(newOrders)
        console.log('orders', orders)
    }

    return (
        <>
            <div id="cart-header">
                <div className="section-header">
                    <div className="section-header-nav">
                        <h2 style={{fontWeight: 'lighter'}}>Apple ID</h2>
                        <div className="header-nav-item">
                            <Link style={{color:'#666'}} className="none-address-style" href="">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cart-body">
                <form>
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


                {orders.map((item, key) => 
                    <div key={item.id} id="body-content">
                        <input  type={'checkbox'} name={'check-item'+ key}></input>
                        <div id="content-item">
                            <img src={item.image}></img>
                            <p>{item.name}</p>
                        </div>
                        <p>${item.price}.00 - {item.quantity}</p>
                        <input type={'number'} value={item.quantity} min={1} name={'quantity'+ key} onChange={event => handleOnchange(event)}></input>
                        <p>${Number(item.price)*Number(item.quantity)}.00</p>
                        <button>Remove</button>
                    </div>
                )}

                

                <div id="body-checkout">
                    <div id="checkout-left">
                        <input type={'checkbox'} name={'check-all'}></input>
                        <label htmlFor="check-all">Select all the product</label>
                        <p>{} item(s)</p>
                    </div>
                    <div id="checkout-right">
                        <p>Total cart: ${}.00</p>
                        <button>Check out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart