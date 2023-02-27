import { Link } from "react-router-dom";
const Section2 = () => {
    const topDevices = [
        {id: 1, name: 'IPHONE 14 PRO', feature: 'Pro. Beyond.', price: 'From $999.00 or $41.62/mo. for 24 mo. before trade-in*', background:'black', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-pro-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661181419170'},
        {id: 2, name: 'APPLE WATCH SERIES 8', feature: 'A healthy leap ahead.', price: 'From $399 or 16.62/mo. for 24mo.', background:'black', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s8-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661792340121'},
        {id: 3, name: 'IPHONE 14', feature: 'Big and bigger.', price: 'From $799.00 or $33.29/mo. for 24 mo. before trade-in*', background:'white', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-14-202209_GEO_US?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1661890731674'},
        {id: 4, name: 'APPLE WATCH ULTRA', feature: 'Adventure awaits.', price: 'From $799 or $33.29/mo for 24 mo.', background:'white', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1660686053448'},
        {id: 5, name: 'AIRPODS PRO (2ND GENERATION)', feature: 'Rebuilt from the sound up.', price: '$249.00 or $41.50/mo. for 6 mo.', background:'black', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-pro-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661016986712'},
        {id: 6, name: 'APPLE WATCH SE', feature: 'A great deal to love.', price: 'From $249 or $10.37/mo. for 24mo.', background:'white', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-se-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1663863101049'},
        {id: 7, name: 'MACBOOK AIR WITH M2 CHIP', feature: 'Dont take it lightly', price: 'From $1199 or $99.91/mo. for 12 mo', background:'white', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202206?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1652743701977'},
        {id: 8, name: 'MACBOOK PRO 13"', feature: 'Pro anywhere.', price: 'From $1299 or $108.25mo. for 12 mo.', background:'black', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202206?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1652803481192'},
        {id: 9, name: 'IPAD AIR', feature: 'Light. Bright. Full of might', price: 'From $599 or $49.91/mo. for 12 mo.', background:'black', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374'},
    ]
    return (
        <>
        <div className="main-first-top-devices">
            <h2 className="main-header"><span>The latest. </span> <span className="header-details">Take a look at what's new, right now</span></h2>
            <div className="top-devices-intro-content overflow-hidden">
                {topDevices.map(device =>
                <Link key={device.id} className="top-devices-intro-items hover-style" to=''>
                    {device.background=='black'
                    ?
                    <div className="intro-items-info">
                        <p className="items-info-name">{device.name}</p>
                        <p className="items-info-features">{device.feature}</p>
                        <p className="items-info-price">{device.price}</p>
                    </div>
                    :
                    <div className="intro-items-info text-black-reflect">
                        <p className="items-info-name">{device.name}</p>
                        <p className="items-info-features">{device.feature}</p>
                        <p className="items-info-price">{device.price}</p>
                    </div>
                    }
                <img className="intro-items-img border-radius-shadow" src={device.img} alt=""/>
                </Link>
                )}
            </div>
        </div>
        </>
    )
}

export default Section2