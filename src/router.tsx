import { createBrowserRouter, type RouteObject } from 'react-router'
import { Layout } from './components/layout/Layout'
import { AllBooksPage } from './pages/AllBooks'
import { BookPage } from './pages/Book'
import { Bookmarks } from './pages/Bookmarks'
const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <AllBooksPage />,
            },
            {
                path: '/book/:isbn13',
                element: <BookPage />,
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />,
            }
        ]
    }
]

export const router = createBrowserRouter(routes, { basename: '/diplom/' })