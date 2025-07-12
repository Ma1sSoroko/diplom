import { useEffect } from 'react'
import { NavLink, useOutletContext } from 'react-router'
import { PostBig } from '../components/postBig/PostBig'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { useAppSelector, useAppDispatch } from '../redux/showModals/store'
import { fetchBooks } from '../redux/booksSlice'


export function FavoritePosts(): React.ReactElement {
    const dispatch = useAppDispatch()
    const lang = useAppSelector(state => state.lang.lang)
    const favoriteBooks = useAppSelector(state => state.books.favoriteBooks)
    const { setTitle } = useOutletContext<TitleContextType>()

    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch])

    useEffect(() => { setTitle(locales[lang].allPosts.title) }, [lang])

    if (favoriteBooks.length == 0) {
        return <div>Favorite books are empty</div>
    }

    // const favoritePosts = list.filter(post => post.isFavorite)

    function buildClassName({ isActive }: { isActive: boolean }): string {
        return isActive ? 'nav-link active' : 'nav-link'
      }

    return (
        <div>
            <div className="navbar navbar-expand-lg">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className={buildClassName} to="/posts/all">All</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={buildClassName} to="/posts/favorite">My favorites</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                {favoriteBooks.map(book => {
                    if (!book.title || !book.image) return null;
                    const bookData = {
                        title: book.title,
                        image: book.image,
                        id: book.id
                    };
                    return <PostBig key={book.id} {...bookData} />;
                })}
            </div>
        </div>
    )
}