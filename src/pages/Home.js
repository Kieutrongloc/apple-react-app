import { useState, useEffect } from 'react';
import Section1 from '../components/layouts/Section1'
const Home = () => {
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const productApi = {
        'accessories': API_URL + 'accessories-manage/accessories-get.php',
        'loudandclear': API_URL + 'accessories-manage/loudandclear-get.php',
    }
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            await fetch(productApi.accessories)
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result);
                setProducts(result);
              },
              (error) => {
                console.log(error);
              }
            )
        }
        getProducts()
    }, [])
    return (
        <>
            <Section1 />
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

                {products.map((item) => 
                    <div key={item.id}>
                        <div className="accessories-nav-item border-radius-shadow hover-style">
                        <i className="nav-item-add fa-solid fa-cart-plus add-cart-btn" ></i>
                        <img src={item.image} alt="" className="accessories-nav-item-img" />
                        <div className="fourth-accessory-nav-box">
                            <p className="nav-item-accessories-status">{item.status}</p>
                            <p className="accessories-nav-item-name">{item.name}</p>
                            <p className="accessories-nav-item-price">{item.price}</p>
                        </div>
                    </div>
                </div> 
                )}

                </div>
            </div>
        </>
    )
}

export default Home