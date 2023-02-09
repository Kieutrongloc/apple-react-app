import {Link} from 'react-router-dom'
const Section7 = () => {
    const appleService = [
        {id: 1,status: '', header: 'Six Apple services. One easy subcription.', detail: '', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375546000'},
        {id: 2,status: 'NEW', header: 'We have got you covered', detail: 'AppleCare+ now comes with unlimited rapairs for accidental damane protection.', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applecare-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1661982301028'},
        {id: 3,status: '', header: 'Discover all the ways to use Apple Pay.', detail: '', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202209?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1661873199894'},
        {id: 4,status: 'HOME', header: 'See how one app can control your entire home.', detail: '', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202110_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634069685000'}
    ]
    return (
        <>
            <div class="main-sixth-services">
            <h2 class="main-header">The Apple experience. <span class="header-details">Do even more with Apple products and services.</span></h2>
            <div class="sixth-services-nav overflow-hidden">
                {appleService.map(service =>
                    <Link key={service.id} to='/' class="sixth-services-nav-item hover-style">
                        <p class="sixth-services-status">{service.status}</p>
                        <h3 class="sixth-services-nav-item-header">{service.header}</h3>
                        <p class="sixth-services-nav-item-detail">{service.detail}</p>
                        <img src={service.img} alt="" class="sixth-services-nav-item-img-larger border-radius-shadow"/>
                    </Link>
                )}
            </div>
        </div>
        </>
    )
}

export default Section7