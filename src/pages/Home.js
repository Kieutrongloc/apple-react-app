import { useState, useEffect } from 'react';
import Section1 from './Home/Section1'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import Section4 from './Home/Section4'
import Section5 from './Home/Section5Acessories'
import Section6 from './Home/Section6Loudandclear'
import Section7 from './Home/Section7'
import Section8 from './Home/Section8'
import Section9 from './Home/Section9'


const Home = () => {
    const API_URL = "http://localhost/www/AppleStore/Backend/";
    const productApi = {
        'accessories': API_URL + 'accessories-manage/accessories-get.php',
        'loudandclear': API_URL + 'accessories-manage/loudandclear-get.php',
    }
    
    const [productsAccessories, setProductsAccessories] = useState([]);
    useEffect(() => {
        const getProductsAccessories = async () => {
            await fetch(productApi.accessories)
            .then(res => res.json())
            .then(
              (result) => {
                // console.log(result);
                setProductsAccessories(result);
              },
              (error) => {
                console.log(error);
              }
            )
        }
        getProductsAccessories()
    }, [])

    const [productsLoudandclear, setProductsLoudandclear] = useState([]);
    useEffect(() => {
        const getProductsLoudandclear = async () => {
            await fetch(productApi.loudandclear)
            .then(res => res.json())
            .then(
              (result) => {
                // console.log(result);
                setProductsLoudandclear(result);
              },
              (error) => {
                console.log(error);
              }
            )
        }
        getProductsLoudandclear()
    }, [])
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 productsAccessories={productsAccessories} />
            <Section6 productsLoudandclear={productsLoudandclear} />
            <Section7 />
            <Section8 />
            <Section9 />

        </>
    )
}

export default Home