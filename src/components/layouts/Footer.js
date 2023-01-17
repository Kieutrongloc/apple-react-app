const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p className="footer-more-detail">More ways to shop: <a href="">Find an Apple Store</a> or <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE</p>
                <div className="footer-line"></div>
                <div className="footer-legal">
                    <div className="footer-legal-list">
                        <p className="legal-list-copyright">Copyright © 2022 Apple Inc. All rights reserved.</p>
                        <ul className="legal-list-nav">
                            <li><a className="legal-list-nav-item hover-underline none-address-style" href="">Privacy Policy</a></li>
                            <li><a className="legal-list-nav-item hover-underline none-address-style" href="">Terms of Use</a></li>
                            <li><a className="legal-list-nav-item hover-underline none-address-style" href="">Sales and Refunds</a></li>
                            <li><a className="legal-list-nav-item hover-underline none-address-style" href="">Legal</a></li>
                            <li><a className="legal-list-nav-item hover-underline legal-list-nav-item-noborder none-address-style" href="">Site Map</a></li>
                        </ul>
                        <p className="vietnam">Vietnam</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer