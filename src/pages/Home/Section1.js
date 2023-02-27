import { Link } from "react-router-dom";
import chatSupportIcon from '../../assets/img/store-support-chat.jpeg'
import appleStoreIcon from '../../assets/img/chat-support.webp'
const Section1 = () => {
    const productList =[
        {id: 1, title: 'Mac', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490'},
        {id: 2, title: 'iPhone', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1661027785546'},
        {id: 3, title: 'iPad', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000'},
        {id: 4, title: 'Apple Watch', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1661796454103'},
        {id: 5, title: 'Airpods', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885'},
        {id: 6, title: 'AirTag', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000'},
        {id: 7, title: 'Apple TV', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783378000'},
        {id: 8, title: 'HomePod mini', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633355783000'},
        {id: 9, title: 'Accessories', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660677092974'},
        {id: 10, title: 'Apple Gift Card', imgLink: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054'},
    ]
    return (
        <>
        <section>
        <div className="section-intro">
            <div className="section-nav-row">
                <h1 className="header-content"><span className="header-main">Store.</span> <span className="header-details">The best way to buy the <br></br> products you love.</span></h1>
                <div className="nav-row-chat">
                    <div className="nav-row-chat-section">
                        <img className="nav-row-chat-section-img" src={chatSupportIcon} alt="Support chat"/>
                        <div>
                            <p className="nav-row-chat-title nav-row-chat-content">Need shopping help</p>
                            <a className="nav-row-chat-link none-address-style nav-row-chat-content" href="">Ask a Specialist</a>
                        </div>
                    </div>
                    <div className="nav-row-chat-section">
                        <img className="nav-row-chat-section-img" src={appleStoreIcon} alt="chat-support"/>
                        <div>
                            <p className="nav-row-chat-title nav-row-chat-content">Visit an Apple Store</p>
                            <a className="nav-row-chat-link none-address-style nav-row-chat-content" href="">Find one near you {'>'} </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="section-nav-devices-list overflow-hidden">
                    {productList.map(product => 
                    <div key={product.id}  className="devices-list-items">
                        <div className="items-detail">
                            <Link to=''>
                                <img src={product.imgLink} alt="" className="device-photo"/>
                                <p className="device-name hover-underline none-address-style">{product.title}</p>
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Section1