// Типизация лого
/// <reference types="vite/client" />

declare module "*.png" {
  const value: string;
  export default value;
}

export type OrderingType = 'title' | 'price'
export interface Book {
  error: number
  title: string
  subtitle: string
  authors: string
  publisher: string
  isbn10: number
  isbn13: number
  pages: number
  year: number
  rating: number
  desc: string
  price: string
  image: string
  url: string
  pdf: {
    [key: string]: string
  }
}

export type BookParams = {
  isbn13: string
}