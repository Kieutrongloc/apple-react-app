import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Section5 = ({productsLoudandclear}) => {
    return (
        <>
        <div class="main-fifth-additional-devices">
            <h2 class="main-header">Loud and clear. <span class="header-details">Upararelled choices for rich, high-quality sound.</span></h2>
            <div className="fourth-accessories-nav overflow-hidden main-fourth-carousel">

                <div class="fifth-additional-devices-nav overflow-hidden">
                    <div href="" class="additional-devices-nav-item-main hover-style">
                        <div class="devices-nav-item-text-box-main">
                            <h4 class="devices-nav-item-header">Get 6 months of Apple Music free.</h4>
                            <p class="devices-nav-item-detail">Included with purchase of select Airpods and Beats products, and HomePds mini.**</p>
                        </div>
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applemusic-202112?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1638212879000" alt="" class="additional-devices-nav-item-img-larger border-radius-shadow"/>
                    </div>
                </div>

                {productsLoudandclear.map((item) => 
                    <div key={item.id}>
                        <div style={{height:'500px',marginTop:'10px'}} className="accessories-nav-item border-radius-shadow hover-style">
                        {/* <FontAwesomeIcon onClick={addToCart} className='add-cart-btn' icon={faCartPlus}/> */}
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