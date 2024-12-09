import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { chatKeys } from './keys/chat';
import { ReqChatRoomMessages } from '../types/chat';
import chatApi from '../api/chat';

export const useChatRooms = (token: string) => {
  return useSuspenseQuery({
    queryKey: chatKeys.chatRoomsKey(token),
    queryFn: async () => {
      const { data } = await chatApi.fetchChatRooms();
      return data;
    },
  });
};

export const useChatRoomMessages = (params: ReqChatRoomMessages) => {
  return useQuery({
    queryKey: chatKeys.chatMessagesKey(params),
    queryFn: async ({ queryKey }) => {
      const queryKeyParamsIndex = 1;
      const reqChatRoomMessages = queryKey[queryKeyParamsIndex];
      const { data } = await chatApi.fetchChatRoomMessages(reqChatRoomMessages);
      return data;
    },
  });
};
