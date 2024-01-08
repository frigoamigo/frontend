import Swal from 'sweetalert2';


const PremiumLowerText = (props) => {

    const handleClick = () => {
        Swal.fire({
            title: `<p class="nextart-400 premium-pp-heading">30 дней</p>  <p class="premium-words-design nextart-600">бесплатно</p>`,
            // icon: "info",
            html: `
              <p class="premium-text-align manrope-400">Пользователь:Пользователь11</p></br></br>
              <p class="premium-text-align manrope-400">Какие-то данные?</p></br></br>
              <p class="premium-text-align manrope-400">Условия соглашения:</p>
              <div class="premium-private-data-block manrope-400"></div>
            `,
            // showCloseButton: true,
            // showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Подключить
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fa fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down",
            customClass: {
                container: 'premium-free-pp-container',
                popup: 'premium-free-pp',
                header: '...',
                title: '...',
                closeButton: '...',
                icon: '...',
                image: '...',
                htmlContainer: '...',
                input: '...',
                inputLabel: '...',
                validationMessage: '...',
                actions: '...',
                confirmButton: '...',
                denyButton: '...',
                cancelButton: '...',
                loader: '...',
                footer: '....',
                timerProgressBar: '....',
              }
          });
    }

    return(
        <>
            <div className="premium-lower-text-block premium-lower-text-block-desktop">
                <div className="premium-lower-text-items premium-new nextart-400">Ещё свежее - в премиуме!</div>
                <div className="premium-lower-text-items premium-free manrope-400">Пробный период <span className="premium-words-design manrope-500">30</span> дней!</div>
                <div className="premium-lower-text-items premium-free-btn">
                    <button onClick={handleClick} className="premium-btn premium-free-btn-hover color-green">
                        <div className="manrope-500 premium-btn-text premium-btn-items">Free</div>  
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
            </div>
            <div className="premium-lower-text-block premium-lower-text-block-mobile">
                <div className=" premium-new nextart-400">Ещё свежее - в премиуме!</div>
                <div className=" premium-free manrope-400">Пробный период <span className="premium-words-design manrope-500">30</span> дней!</div>
                <div className=" premium-free-btn">
                    <button onClick={handleClick} className="premium-btn premium-free-btn-hover color-green">
                        <div className="manrope-500 premium-btn-text premium-btn-items">Free</div>  
                        <div className="premium-btn-items">
                            <svg width="2" height="25" viewBox="0 0 2 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-btn-line">
                                <path d="M1 0V69"/>
                            </svg>
                        </div>
                        <div className="premium-btn-items">
                            <svg width="30" height="15" viewBox="0 0 10 48" xmlns="http://www.w3.org/2000/svg" className="premium-btn-cart">
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
            </div>
        </>
    )
}

export default PremiumLowerText;