import api from '@/api'
import { getAccessToken } from '@/api/authentication'
import CurrentlyPlayingResponse from '@/api/currentlyPlaying/response'

export const getCurrentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken()

  return (await api.get<CurrentlyPlayingResponse>('me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })).data
}
