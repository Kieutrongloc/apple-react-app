import {Link} from "react-router-dom"
const Section8 = () => {
    const specialStore = [
        {id: 1, for: 'EDUCATION', header: 'Save on Mac or iPad with education pricing.', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-edu-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627492399000'},
        {id: 2, for: 'BUSINESS', header: 'From enterprise to small business, we will work with you.', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-business-202209?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1660927783133'},
        {id: 3, for: 'GOVERNMENT', header: 'Special pricing is available for stat, local, and federal agencies.', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1661873199894'},
        {id: 4, for: 'VETERANTS AND MILITARY', header: 'Active and veteran members may be eligible for exclusive savings.', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veterans-202209?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1660768695429'},
        {id: 5, for: 'CERTIFIED REFURBISHED', header: 'Shop refurbished Apple products backed by a one-year warranty.', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627318783000'}
    ]
    return (
        <>
            <div className="main-eighth-special-stores">
            <h2 className="main-header">Special Stores. <span className="header-details">Exclusive savings for businesses, school, and more.</span></h2>
            <div className="main-special-stores-nav overflow-hidden">
                {specialStore.map(item =>
                <Link key={item.id} to='/' className="main-special-stores-nav-item hover-style">
                    <p className="main-special-stores-status">{item.for}</p>
                    {item.for=='BUSINESS'?
                    <h3 className="main-special-stores-nav-item-header item-header-white">{item.header}<span className="small-upper-word">1</span></h3>
                    :
                    <h3 className="main-special-stores-nav-item-header">{item.header}<span className="small-upper-word">1</span></h3>
                    }
                    <img src={item.img} alt="" className="main-special-stores-nav-item-img-larger border-radius-shadow"/>
                </Link>
                )}
            </div>
        </div>

        </>
    )
}

export default Section8