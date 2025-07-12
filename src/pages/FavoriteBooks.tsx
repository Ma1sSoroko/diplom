import { useEffect } from 'react'
import { NavLink, useOutletContext } from 'react-router'
import { Book } from '../components/book/Book'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { useAppSelector, useAppDispatch } from '../redux/showModals/store'
import { fetchBooks } from '../redux/booksSlice'


export function FavoriteBooks(): React.ReactElement {
    const dispatch = useAppDispatch()
    const lang = useAppSelector(state => state.lang.lang)
    const favoriteBooks = useAppSelector(state => state.books.favoriteBooks)
    const { setTitle } = useOutletContext<TitleContextType>()

    useEffect(() => {
        dispatch(fetchBooks({ ordering: 'title' }))
    }, [dispatch])

    if (favoriteBooks.length == 0) {
        return <div>Favorite books are empty</div>
    }

    function buildClassName({ isActive }: { isActive: boolean }): string {
        return isActive ? 'nav-link active' : 'nav-link'
    }

    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
            {favoriteBooks.map(book => {
                if (!book.title || !book.image) return null;
                const bookData = {
                    title: book.title,
                    image: book.image,
                };
                return <Book key={book.isbn13} {...bookData} />;
            })}
        </div>
    )
}