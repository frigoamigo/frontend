

const LoadingRecipeCards = (Component) => {
    return function LoadingRecipeCards({isLoading, ...props}) {

        if(!isLoading) {
            return <Component {...props} />
        } else {
            return (
                <div>
                    <h1>Is Loading...</h1>
                </div>
            )
        }
        
    }
}

export default LoadingRecipeCards;