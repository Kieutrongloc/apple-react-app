import redContainer from '../../assets/img/apple-red-container.png'
import appleTrading from '../../assets/img/apple-trading.png'
import applePay from '../../assets/img/apple-pay.png'
import appleEmoji from '../../assets/img/apple-emoji.png'
import appleLogo from '../../assets/img/apple-logo-apple.png'
import appleWrapping from '../../assets/img/apple-gift-wrapping.png'
const Section4 = () => {
    return (
        <>
        <div className="main-third-store">
            <h2 className="main-header">The Apple Store difference. <span className="header-details">Even more reasons to shop with us.</span></h2>
            <div className="main-third-store-nav overflow-hidden">
                <a href="" className="third-store-nav-item hover-style border-radius-shadow">
                    <img src={redContainer} alt="" className="store-nav-item-icon"/>
                    <p className="store-nav-item-detail">Enjoy <span id="span-color-red" style={{color:'red'}}>two-hour delivery</span> from an Apple Store, <span className="span-color-red">free delivery</span>, or <span className="span-color-red">easy pickup</span></p>
                </a>
                <a href="" className="third-store-nav-item hover-style border-radius-shadow">
                    <img src={appleTrading} alt="" className="store-nav-item-icon"/>
                    <p className="store-nav-item-detail"><span id="color-violet" style={{color:'rgb(218, 93, 218)'}}>Trade in your current device.</span> Get credit toward a new one.</p>
                </a>
                <a href="" className="third-store-nav-item hover-style border-radius-shadow">
                    <img src={applePay} alt="" className="store-nav-item-icon"/>
                    <p className="store-nav-item-detail">Pay in full or <span id="color-green" style={{color:'green'}}>pay over time.</span> Your choice.</p>
                </a>
                <a href="" className="third-store-nav-item hover-style border-radius-shadow">
                    <img src={appleEmoji} alt="" className="store-nav-item-icon"/>
                    <p className="store-nav-item-detail">Make them yours. <span id="color-blue" style={{color:'blue'}}>Engrave a mix of emoji, names, and numbers for free.</span></p>
                </a>
                <a href="" className="third-store-nav-item hover-style border-radius-shadow">
                    <img src={appleLogo} alt="" className="store-nav-item-icon"/>
                    <p className="store-nav-item-detail"><span id="color-gradient">Customize</span> your Mac and create your own style of Apple Watch.</p>
                </a>
                <a href="" className="third-store-nav-item hover-style border-radius-shadow">
                    <img src={appleWrapping} alt="" className="store-nav-item-icon"/>
                    <p className="store-nav-item-detail">Add to the excitement with <span id="color-orange" style={{color:'orange'}}>special gift wrapping.</span></p>
                </a>
            </div>
        </div>
        </>
    )
}

export default Section4