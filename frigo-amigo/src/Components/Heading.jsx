

const Heading = (props) => {
    return (
        <>
            <div className="heading">
                <h2 className='nextart-300 heading-text'>{props.heading}</h2>
                <div style={{width:`${props.lineWidth}`, marginLeft:`${props.lineMargin}`}} className="orange-line"></div>
            </div>
        </>
    )
}

export default Heading;