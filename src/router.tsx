import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from './components/layout/Layout'
import { Search } from './pages/Search'
import { ListOfPosts } from './components/listOfPosts/ListOfPosts'
import { AllPosts } from './pages/AllPosts'
import { FavoritePosts } from './pages/FavoritePosts'
import type { RouteObject } from 'react-router'

const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/posts/all/1" />,
            },
            {
                path: '/posts',
                children: [
                    {
                        path: '/posts/all/:currentPage',
                        element: <AllPosts />,
                    },
                    {
                        path: '/posts/favorite',
                        element: <FavoritePosts />,
                    },
                    {
                        path: '/posts/search/:query/:currentPage',
                        element: <Search />,
                    },
                    {
                        path: '/posts/:id',
                        element: <ListOfPosts />,
                    },
                ],
            },
            {
                path: '/search',
                element: <Search />,
            }
        ],
    },
]

export const router = createBrowserRouter(routes, { basename: '/diplom' })