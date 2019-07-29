import { setBearerToken } from '@/http'

export const deleteLocalToken = () => localStorage.removeItem('token')
export const setHeaderToken = token => setBearerToken(token)
