import AuthenticationResponse from '@/api/authentication/response'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
    ).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
})

export const getAccessToken = async () => {
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

  return (await api.post<AuthenticationResponse>('token', {
    grant_type: "refresh_token",
    refresh_token,
  })).data
}
