export function Counter(): React.ReactElement {

    function handleClickIncrement() {
        console.log('increment')
    }

    function handleClickDecrement() {
        console.log('decrement')
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-outline-dark "
                onClick={handleClickIncrement}>
                Increment
            </button>
            <span>Count</span>
            <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleClickDecrement} >
                Decrement
            </button>
        </>
    )
}