import { ChatMessages, ChatRoom, ReqChatRoomMessages } from '../types/chat';
import createApi from './instance/fetch-instance';

const createChatApi = (serverToken?: string) => {
  const api = createApi({ serverToken });

  return {
    fetchChatRooms: (): Promise<ChatRoom[]> => api<ChatRoom[]>('/v1/chat/room'),
    fetchChatRoomMessages: ({
      chatRoomId,
      cursor = '0',
      limit = '20',
      next = cursor,
    }: ReqChatRoomMessages): Promise<ChatMessages> =>
      api<ChatMessages>(`/v1/chat/room/${chatRoomId}/message`, {
        params: {
          chatRoomId,
          cursor,
          limit,
          next,
        },
      }),
  };
};

const chatApi = createChatApi();
export default chatApi;

export const createServerChatApi = (serverToken: string) => {
  return createChatApi(serverToken);
};
