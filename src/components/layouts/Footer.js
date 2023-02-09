import {Link} from 'react-router-dom'
const Footer = () => {
    const legalList = [
    {id: 1, title: 'Privacy Policy'},
    {id: 2, title: 'Terms of Use'},
    {id: 3, title: 'Sales and Refunds'},
    {id: 4, title: 'Legal'}]
    return (
        <footer>
            <div className="footer">
                <p className="footer-more-detail">More ways to shop: <a href="">Find an Apple Store</a> or <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE</p>
                <div className="footer-line"></div>
                <div className="footer-legal">
                    <div className="footer-legal-list">
                        <p className="legal-list-copyright">Copyright © 2022 Apple Inc. All rights reserved.</p>
                        <ul className="legal-list-nav">
                            {legalList.map(item =>
                                <li key={item.id}>
                                    <Link to='/' className="legal-list-nav-item hover-underline none-address-style">{item.title}</Link>
                                </li>
                            )}
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