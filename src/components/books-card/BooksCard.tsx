import { Link } from "react-router"

export function BooksCard(props: { title: string, price: string, image: string, isbn13: string }) {
    const { title, price, image, isbn13 } = props

    return (
        <Link to={`/book/${isbn13}`} className="card w-25 mb-4 flex-1-1-200 m-3 text-dark">
            <div>
                <img src={image} alt="#" className="w-100" />
            </div>
            <div className="p-3">
                <p className="text-transform-uppercase font-weight-bold font-size-10">{title}</p>
                <p className="card-text font-size-14">{price}</p>
            </div>
        </Link>
    )
}