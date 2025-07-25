import { post } from '../config/locales/client'
import { baseUrl, booksEndpoint } from '../config/locales/api'
import type { JwtType } from '../types'

export async function requestRefresh(body: Pick<JwtType, 'refresh'>): Promise<{ access: string } | void> {
    try {
        const response = await post(baseUrl + booksEndpoint, body)
        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message);
        }
    }
} 