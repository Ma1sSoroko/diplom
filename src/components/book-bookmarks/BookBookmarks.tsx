import { Link } from "react-router"
import { Counter } from "../counter/Counter"

export function BookBookmarks(props: { title: string, authors: string, year: string, image: string, isbn13: string }) {
    const { title, authors, year, image, isbn13 } = props

    return (
        <div className="card w-100 mb-4 d-flex flex-row">
            <Link to={`/book/${isbn13}`}>
                <div>
                    <img src={image} alt="#" className="w-25" />
                </div>
                <div className="p-3">
                    <p className="font-weight-bold font-size-10 text-dark">{title}</p>
                </div>
            </Link>
            <Counter />
        </div>
    )
}