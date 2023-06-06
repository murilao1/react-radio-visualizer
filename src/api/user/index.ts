import api from '@/api'
import { getAccessToken } from '@/api/authentication'
import UserResponse from '@/api/user/response';

export const getUser = async () => {
  const { access_token } = await getAccessToken();

  return (await api.get<UserResponse>('me', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })).data
}
