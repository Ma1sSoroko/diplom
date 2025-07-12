import style from './PostBig.module.scss'
import { Link } from 'react-router'
import { useAppDispatch } from '../../redux/showModals/store'
import { addFavoriteBook } from '../../redux/booksSlice'

export function PostBig(props: { title?: string, text?: string, image: string, date?: string, id: number }): React.ReactElement {
    const { title, text, image, date, id } = props
    const dispatch = useAppDispatch()

        function handleClickAddToFavorite() {
            dispatch(addFavoriteBook(props))
            console.log(addFavoriteBook)
        }

    return (
        <>
            <div className={style.wrap}>
                <div>
                    <h2>{title}</h2 >
                    <p>{text}</p>
                    <p className="card-text"><small className="text-body-secondary">{date}</small></p>
                    <button className="btn btn-primary mb-2" onClick={handleClickAddToFavorite}>Добавить в избранное</button>
                    <div className="d-flex gap-2">
                        <Link to={`/posts/${id}`} className="btn btn-primary">Читать далее</Link>
                    </div>
                </div>
                <div className='col-4 rounded overflow-hidden'>
                    <img src={image} className={style.img} />
                </div>
            </div>
        </>
    )
}