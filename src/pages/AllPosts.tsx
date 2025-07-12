import { useEffect } from 'react'
import { useParams, NavLink, useOutletContext } from 'react-router'
import { PostBig } from '../components/postBig/PostBig'
import { locales } from '../config/locales'
import type { TitleContextType, OrderingType } from '../types'
import { useAppSelector, useAppDispatch } from '../redux/showModals/store'
import { fetchBooks, setOrdering } from '../redux/booksSlice'
import { buildSchemePagination } from '../utils/buildPagination'

export function AllPosts(): React.ReactElement {
    const { currentPage = 1, query } = useParams()
    const dispatch = useAppDispatch()
    const lang = useAppSelector(state => state.lang.lang)
    const { books, isLoading, error, ordering } = useAppSelector(state => state.books)
    const { setTitle } = useOutletContext<TitleContextType>()

    useEffect(() => {
        const offset = (Number(currentPage) - 1) * 20
        dispatch(fetchBooks({ offset, search: query ?? '' }))
    }, [dispatch, currentPage, query])

    useEffect(() => { setTitle(locales[lang].allPosts.title) }, [lang])

    useEffect(() => {
        dispatch(setOrdering(ordering as OrderingType))
    }, [dispatch, ordering])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!books || books.length == 0) {
        return <div>List is empty</div>
    }

    function renderPagination(): React.ReactElement {
        const pageCount = Math.ceil(total / 20)
        const pagination = buildSchemePagination(+currentPage, pageCount)

        return (
            <nav className="my-4">
                <ul className="pagination">
                    {pagination.map((item: number | string, index: number) => {
                        if (item === '...') {
                            return <li className="page-item disabled" key={index}><span className="page-link">{item}</span></li>
                        }

                        return <li className="page-item" key={index}><NavLink className="page-link" to={`/posts/all/${item}`}>{item}</NavLink></li>
                    })}
                </ul>
            </nav>
        )
    }

    function buildClassName({ isActive }: { isActive: boolean }): string {
        return isActive ? 'nav-link active' : 'nav-link'
    }

    function handleChangeOrdering(event: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setOrdering(event.target.value as OrderingType))
        dispatch(fetchBooks({ ordering: event.target.value as OrderingType }))
        console.log(event.target.value);
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
                    <li className="nav-item">
                        <select className="form-select" onChange={handleChangeOrdering} value={ordering}>
                            <option value="date">По дате</option>
                            <option value="title">По названию</option>
                            <option value="text">По тексту</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div>
                {renderPagination()}
                {list.map((book: Book) => (
                    <PostBig key={book.isbn13} {...book} />
                ))}
                {renderPagination()}
            </div>
        </div>
    )
}