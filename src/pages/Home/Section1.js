import chatSupportIcon from '../../assets/img/store-support-chat.jpeg'
import appleStoreIcon from '../../assets/img/chat-support.webp'
const Section1 = () => {

    return (
        <>
        <section>

        <div class="section-intro">
            <div class="section-nav-row">
                <h1 class="header-content"><span class="header-main">Store.</span> <span class="header-details">The best way to buy the <br></br> products you love.</span></h1>
                <div class="nav-row-chat">
                    <div class="nav-row-chat-section">
                        <img class="nav-row-chat-section-img" src={chatSupportIcon} alt="Support chat"/>
                        <div>
                            <p class="nav-row-chat-title nav-row-chat-content">Need shopping help</p>
                            <a class="nav-row-chat-link none-address-style nav-row-chat-content" href="">Ask a Specialist</a>
                        </div>
                    </div>
                    <div class="nav-row-chat-section">
                        <img class="nav-row-chat-section-img" src={appleStoreIcon} alt="chat-support"/>
                        <div>
                            <p class="nav-row-chat-title nav-row-chat-content">Visit an Apple Store</p>
                            <a class="nav-row-chat-link none-address-style nav-row-chat-content" href="">Find one near you {'>'} </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="section-nav-devices-list overflow-hidden">
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">Mac</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202209_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1661027785546" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">iPhone</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">iPad</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1661796454103" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">Apple Watch</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">Airpods</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">AirTag</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783378000" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">Apple TV</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633355783000" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">HomePod mini</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660677092974" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">Accessories</a>
                    </div>
                   </div>
                   <div class="devices-list-items">
                    <div class="items-detail">
                        <a href=""> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=200&hei=130&fmt=png-alpha&.v=1653339351054" alt="" class="device-photo"/></a>
                        <a href="" class="device-name hover-underline none-address-style">Apple Gift Card</a>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Section1