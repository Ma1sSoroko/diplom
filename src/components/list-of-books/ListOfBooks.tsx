import { useState, useEffect } from "react"
import { BooksCard } from "../books-card/BooksCard"
import type { Book } from "../../types"
import { Container } from "../../components/container/Container"
import { Loader } from "../loader/Loader"

export function ListOfBooks(): React.ReactElement {
    const [books, setBooks] = useState<Book[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchBooks()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    async function fetchBooks() {
        const response = await fetch("https://api.itbook.store/1.0/new")
        const data = await response.json()
        setBooks(data.books)
        setIsLoading(false)
    }

    return (
        <Container>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
                {books.map(book => (
                    <BooksCard 
                        key={book.isbn13} 
                        {...book}
                        isbn13={book.isbn13.toString()}
                    />
                ))}
            </div>
        </Container>
    )
}