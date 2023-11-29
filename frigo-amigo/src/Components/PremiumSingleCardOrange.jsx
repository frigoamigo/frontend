
const PremiumSingleCardOrange = (props) => {
    return(
        <>
        <ul>
            <li className="premium-cards-list">
                <div className="premium-card-box-orange">
                    <div className="premium-card-heading-orange nextart-400">{props.time}</div>
                    <button className="premium-btn-hover-orange color-orange">
                        <div className="manrope-500 premium-btn-text premium-btn-items">{props.priceTotal}</div>  
                        <div className="premium-btn-items">
                            <svg width="2" height="35" viewBox="0 0 2 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-btn-line">
                                <path d="M1 0V69"/>
                            </svg>
                        </div>
                        <div className="premium-btn-items">
                            <svg width="50" height="25" viewBox="0 0 10 48" xmlns="http://www.w3.org/2000/svg" className="premium-btn-cart">
                                <path d="M49.7175 12.9706C49.4254 12.5619 48.9496 12.3173 48.4424 
                                12.3173H15.1147L12.5911 3.74149C11.6018 0.363777 9.25097 0 8.28677 0H1.55936C0.697239 
                                0 0 0.688855 0 1.53715C0 2.38545 0.698809 3.0743 1.55936 3.0743H8.2852C8.49877 3.0743 
                                9.14733 3.0743 9.59017 4.58204L18.2695 36.0232C18.458 36.6858 19.072 37.144 19.7708 
                                37.144H40.969C41.627 37.144 42.2143 36.7384 42.4358 36.1269L49.9075 14.3731C50.0803 
                                13.9025 50.008 13.3777 49.7159 12.969L49.7175 12.9706ZM39.8729 34.0712H20.9564L15.9925 
                                15.3932H46.2266L39.8729 34.0712ZM36.7793 40.2601C34.6107 40.2601 32.8534 41.9923 32.8534 
                                44.13C32.8534 46.2678 34.6107 48 36.7793 48C38.948 48 40.7052 46.2678 40.7052 44.13C40.7052 
                                41.9923 38.948 40.2601 36.7793 40.2601ZM22.6461 40.2601C20.4775 40.2601 18.7202 41.9923 
                                18.7202 44.13C18.7202 46.2678 20.4775 48 22.6461 48C24.8148 48 26.572 46.2678 26.572 
                                44.13C26.572 41.9923 24.8148 40.2601 22.6461 40.2601Z"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </li>
        </ul>
        </>
        // style={{backgroundImage: "linear-gradient(to right, #fff, #fff, #fff, #fff)", border: "2px solid #EC9A29"}}
    )
}

export default PremiumSingleCardOrange;