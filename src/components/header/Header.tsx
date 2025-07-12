import { Link } from "react-router"
import logo from "../../assets/Logo-black.png"
import { FaBookmark, FaShoppingBasket } from "react-icons/fa";

export function Header(): React.ReactElement {
    return (
        <header className="w-75 mx-auto my-4 border-bottom">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Book Store" />
                    </Link>
                </div>
                <div className="d-flex">
                    <div className="mx-2 ">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="d-flex mx-2">
                        <select name="sort" id="sort">
                            <option value="title">Title</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="mx-2">
                            <Link to="#">
                                <FaBookmark className="text-dark" />
                            </Link>
                        </div>
                        <div className="mx-2">
                            <Link to="/bookmarks">
                                <FaShoppingBasket className="text-dark" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}