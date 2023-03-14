import { Link } from "react-router-dom";
// import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import $ from 'jquery';
import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/cart.css';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Cart = () => {

    //Render cart items
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            await fetch('http://localhost/www/AppleStore/Backend/cart/cart-get.php/?user_id='+JSON.parse(window.localStorage.getItem('user')).id)
            .then(res => res.json())
            .then(
                (res) => {
                    setOrders(res.reverse());
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        getOrders()
    }, [])
    // function handleOnchange(event){
    //     //console.log(orders);
    //     console.log(event.target.name, event.target.value)
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     const index = name.substr(name.length - 1)
    //     const newOrders = orders;
    //     newOrders[index].quantity = value;
    //     console.log('newOrders', newOrders)
    //     //setOrders(newOrders);
    //     setOrders(newOrders)
    //     console.log('orders', orders)
    // }

    // Auto-direct to signin if user not is logged in yet
    const navigateSignin = useNavigate();
    const directHome = () => {
        if (localStorage.getItem("user") === null) {
            navigateSignin('./../signin')
        }
    }
    useEffect(() => {
        directHome()
    }, [navigateSignin]);

    // Delete user from localStorage when clicking signOut
    const signOut = () => {
        window.localStorage.removeItem('user');
        window.location.href="/"
    }

    //Filtered items when click search
    const [filteredOrders, setFilteredOrders] = useState(null);
    const submitSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const searchItem = formData.get('search-item');
        const filteredItems = orders.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteredOrders(filteredItems);
    }
    
    // Handle check single item
    const [isCheckedItem, setIsCheckedItem] = useState(false);
    const handleCheck = (e) => {
        const checkbox = e.target;
        {checkbox.checked ? setIsCheckedItem(!isCheckedItem) : setIsCheckedItem(isCheckedItem)};
    }

    // Handle check all input
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const checkboxInputs = useRef([])
    
    const handleCheckAll = (e) => {
        setIsChecked(!isChecked);
        setIsCheckedAll(!isCheckedAll);
        const checkboxes = e.target.parentNode.parentNode.parentNode.querySelectorAll('#body-content input[type="checkbox"]');
        checkboxInputs.current = checkboxes;
        {checkboxInputs.current !== null && checkboxInputs.current.forEach((checkboxInput) => {checkboxInput.checked = !isCheckedAll})}
        
    }
    
    // Update total price and quantity of cart
    const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);
    const [selectedTotalItem, setSelectedTotalItem] = useState(0);
    const productPrice = useRef(0)
    const productQuantity = useRef(0)
    // const productQuantity = orders.length!==0 && filteredOrders===null ? orders.map(() => useRef()) : filteredOrders!==null && filteredOrders.length>0 && filteredOrders.map(() => useRef())
// 

    useEffect(()=>{
        const checkboxes = document.querySelectorAll('#body-content input[type="checkbox"]');
        const price = document.querySelectorAll('#body-content #product-price');
        const quantity = document.querySelectorAll('#body-content #product-quantity');
        checkboxInputs.current = checkboxes;
        productPrice.current = price;
        productQuantity.current = quantity;
        // console.log(Number(productPrice.current[1].innerHTML.replace(/[^0-9.-]+/g,"")))
        // console.log((productQuantity.current[1].value))
        let newTotalPrice = selectedTotalPrice;
        let newTotalItem = selectedTotalItem;
        // if (checkboxes[index].checked) {
        //     newTotalPrice += Number(productPrice.current[1].innerHTML.replace(/[^0-9.-]+/g,""))*productQuantity.current[1].value
        // } else {
        //     newTotalPrice -= Number(productPrice.current[1].innerHTML.replace(/[^0-9.-]+/g,""))*productQuantity.current[1].value
        // }
        // setSelectedTotalPrice(newTotalPrice);
    })
    // console.log(SelectedTotalPrice)
    const orderTotal = () => {
        
    }


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

            <div id="cart-body" onSubmit={(e)=> submitSearch(e)}>
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


                {orders.length!==0 && filteredOrders===null ?
                orders.map((item, index) => 
                <div key={item.id} id="body-content">
                    <input ref={checkboxInputs[index]} onChange={(e) => handleCheck(e)} type={'checkbox'} defaultChecked={isCheckedAll} name={'check-item'}></input>
                    <div id="content-item">
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                    <p id='product-price' ref={productPrice[index]}>${item.price}.00</p>
                    <input id='product-quantity' ref={productQuantity[index]} type={'number'} value={item.quantity} min={1}></input>
                    <p>${Number(item.price)*Number(item.quantity)}.00</p>
                    <button>Remove</button>
                </div>
                ) :
                orders.length===0 && filteredOrders===null ?
                <div className="body-message"><p>Nothing in your cart</p></div> :
                filteredOrders!==null && filteredOrders.length>0 ?
                filteredOrders.map((item, index) => 
                <div key={item.id} id="body-content">
                    <input ref={checkboxInputs[index]} onChange={(e) => handleCheck(e)} type={'checkbox'} defaultChecked={isCheckedAll} name={'check-item'}></input>
                    <div id="content-item">
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                    <p id='product-price' ref={productPrice[index]}>${item.price}.00</p>
                    <input id='product-quantity' ref={productQuantity[index]} type={'number'} value={item.quantity} min={1}></input>
                    <p>${Number(item.price)*Number(item.quantity)}.00</p>
                    <button>Remove</button>
                </div>
                ) :
                <div className="body-message"><p>No item matched your search</p></div>
                }

                
                <div id="body-checkout">
                    <div id="checkout-left">
                        <input onChange={(e) => handleCheckAll(e)} type={'checkbox'} name={'check-all'}></input>
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