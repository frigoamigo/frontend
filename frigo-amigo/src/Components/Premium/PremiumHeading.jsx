

const PremiumHeading = () => {
    return(
        <>
            <div className="premium-heading-first nextart-900">Premium</div>
            <div className="premium-text manrope-400 premium-text-web-desktop">
                <p>Добавьте <span className="premium-words-design nextart-600">более</span> 1 человека</p> <br/>
                <p>Получайте <span className="premium-words-design nextart-600">уведомления <br/></span> об истечении срока годности</p> <br/>
                <p><span className="premium-words-design nextart-600">Рекомендации</span> по хранению продуктов</p>
            </div>
            <div className="premium-text manrope-400 premium-text-web-mobile">
                <p id="premium-text-line1">Получайте <span className="premium-words-design nextart-600">уведомления </span> об истечении <br/> срока годности</p> <br/>
                <p id="premium-text-line2">Добавьте <span className="premium-words-design nextart-600">более</span> 1 человека</p> <br/>
                <p id="premium-text-line3"><span className="premium-words-design nextart-600">Рекомендации</span> по хранению продуктов</p>
            </div>
            <div className="premium-heading-second nextart-900">Premium</div>
        </>
    )
}

export default PremiumHeading;