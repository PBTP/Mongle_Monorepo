import { cookies } from 'next/headers';

export const getAuthCookie = (): { accessToken: string; uuid: string } => {
  const cookie = cookies().get('AUTH')?.value;
  const [accessToken, uuid] = cookie?.split(',') ?? [];
  return { accessToken, uuid };
};
