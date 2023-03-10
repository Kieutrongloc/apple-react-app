import { Link } from "react-router-dom";
// import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import $ from 'jquery';
import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/cart.css';
// import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const cartAPI = {
        'get': API_URL + 'cart/cart-get.php',
        'save': API_URL + 'cart/cart-save.php',
        'delete': API_URL + 'cart/cart-delete.php',
        'update': API_URL + 'cart/cart-update.php',
        // 'loudandclear': API_URL + 'accessories-manage/loudandclear-get.php',
    }


    // Auto-direct to signin if user is logged in already
    const directHome = () => {
        if (localStorage.getItem("user") === null) {
            window.location.href="http://localhost:3000/signin";
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
        window.getCart = getCart
    }, [])


    //Filtered cart when click search
    const [filteredCart, setFilteredCart] = useState(null);
    const submitSearch = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchItem = formData.get('search-item');
        const filteredItems = Cart.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
        setFilteredCart(filteredItems);
    }


    // Handle check all input
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    
    
    const handleCheckAll = (event) => {
        setIsCheckedAll(!isCheckedAll);
        // const checkboxes = event.target.parentElement.parentElement.parentElement.querySelectorAll('#body-content input[type="checkbox"]');
        // console.log(checkboxes)
        // checkboxes.forEach((checkbox) => {
        //     checkbox.checked = !isCheckedAll;
        // });
        // return;
        setIsChecked(!isChecked);
        let newTotalPrice = 0;
        let newTotalItem = 0;
        {
            Cart.length!==0 && filteredCart===null ?
            Cart.forEach((item) => {
                // if (event.target.checked) {
                //     newTotalPrice += item.price * item.quantity;
                //     newTotalItem += Number(item.quantity)
                // }
            })
            :
            filteredCart.forEach((item) => {
                // if (event.target.checked) {
                //     newTotalPrice += item.price * item.quantity;
                //     newTotalItem += Number(item.quantity)
                // }
            })
        };
        setSelectedTotalPrice(newTotalPrice);
        setSelectedTotalItem(newTotalItem);
    }; 

    // Handle check single item
    const [isCheckedItem, setIsCheckedItem] = useState(false);
    const checkProduct = (event) => {
        const checkbox = event.target;
        {checkbox.checked?
        setIsCheckedItem(!isCheckedItem) : setIsCheckedItem(isCheckedItem)
        }
        // return
        let newTotalPrice = selectedTotalPrice;
        let newTotalItem = selectedTotalItem
        let price = parseFloat(event.target.parentElement.querySelectorAll('p')[1].innerHTML.replace(/[^0-9.-]+/g,""))
        let quantity = parseFloat(event.target.parentElement.querySelectorAll('input')[1].value.replace(/[^0-9.-]+/g,""))
        if (event.target.checked) {
            newTotalPrice += price*quantity;
            newTotalItem += quantity
        } else {
            newTotalPrice -= price*quantity;
            newTotalItem -= quantity
        }
        setSelectedTotalPrice(newTotalPrice);
        setSelectedTotalItem(newTotalItem);
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
                    // window.getCart(data)
                })
            })
            .then(function() {
            });
    }

    // Update total price and quantity of cart
    const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);
    const [selectedTotalItem, setSelectedTotalItem] = useState(0);
    // const checkboxInputs = useRef(null)

    // const cartCalculate = () => {
    //     setTimeout(() => {
    //         console.log(checkboxInputs.current)
    //         checkboxInputs.forEach((checkboxInput) => {
    //             if (checkboxInput.checked === !isCheckedAll) {console.log('true')} else {console.log('false')};
    //         });
            
    //     }, 100);
    //     // setIsChecked(!isChecked);
    //     // const checkboxes = document.getElementById('cart-body').querySelectorAll('#body-content input[type="checkbox"]')
        
    //     let newTotalPrice = 0;
    //     let newTotalItem = 0;
    // }
    
    // useEffect(() => {
    //     cartCalculate();
    // }, [])


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
                // cartresponse.json().then(function(data){
                //     window.getCart()
                //     // const checkboxes = event.target.parentElement.parentElement.parentElement.querySelectorAll('#body-content input[type="checkbox"]');
                //     const checkboxes = document.getElementById('cart-body').querySelectorAll('#body-content input[type="checkbox"]')
                //     checkboxes.forEach((checkbox) => {
                //         if (checkbox.checked) {
                //             const price = checkbox.parentElement.getElementsByTagName('p')[1].innerHTML.replace(/[^0-9.-]+/g,"")
                //             console.log(price)
                //         } else {
                //             console.log('nothing')
                //         }

                //     });
                // })
                handleCheckAll()
            })
            .then(function() {
        });
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
                    <input  type={'checkbox'} defaultChecked={isCheckedAll} onChange={checkProduct} name={'check-item'}></input>
                    <div id="content-item">
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                    <p>${item.price}.00</p>
                    <input type={'number'} onChange={(event)=>updateQuantity(event, item.id)} defaultValue={item.quantity} min={1}></input>
                    <p>${Number(item.price)*Number(item.quantity)}.00</p>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                ) :
                Cart.length===0 && filteredCart===null ?
                <div className="body-message"><p>Nothing in your cart</p></div> :
                filteredCart!==null && filteredCart.length>0 ?
                filteredCart.map((item) => 
                <div key={item.id} id="body-content">
                    <input  type={'checkbox'} defaultChecked={isCheckedAll} onChange={checkProduct} name={'check-item'}></input>
                    <div id="content-item">
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </div>
                    <p>${item.price}.00</p>
                    <input type={'number'} onChange={(event)=>updateQuantity(event, item.id)} defaultValue={item.quantity} min={1}></input>
                    <p>${Number(item.price)*Number(item.quantity)}.00</p>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                ) :
                <div className="body-message"><p>No item matched your search</p></div>
                }

                <div id="body-checkout">
                    <div id="checkout-left">
                        <input onChange={handleCheckAll} type={'checkbox'} name={'check-all'}></input>
                        <label htmlFor="check-all">Select all the product</label>
                        <p>{selectedTotalItem} item(s)</p>
                    </div>
                    <div id="checkout-right">
                        <p>Total cart: ${selectedTotalPrice}.00</p>
                        <button>Check out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart