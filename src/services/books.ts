import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Book } from '../types'
import { baseUrl, bookEndpoint, booksEndpoint } from '../config/api'

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
            // getBooks: builder.query<Book, string>({
            //     query: () => {
            //         const params = { limit: '20', offset: '0' }
            //         const paramsString = new URLSearchParams(params).toString()

            //         return `${booksEndpoint}?${paramsString}`
            //     }
            // }),

        getBookById: builder.query<Book, string>({
            query: (isbn13) => `${bookEndpoint}/${isbn13}`,
        }),
    }),


})

export const { useGetBookByIdQuery } = booksApi
