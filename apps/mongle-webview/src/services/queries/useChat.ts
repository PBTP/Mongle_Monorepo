import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { chatKeys } from './keys/chat';
import { ReqChatRoomMessages } from '../types/chat';
import chatApi from '../api/chat';

export const useChatRooms = (token: string) => {
  return useSuspenseQuery({
    queryKey: chatKeys.chatRoomsKey(token),
    queryFn: () => {
      const res = chatApi.fetchChatRooms();
      return res;
    },
  });
};

export const useChatRoomMessages = (params: ReqChatRoomMessages) => {
  return useQuery({
    queryKey: chatKeys.chatMessagesKey(params),
    queryFn: async ({ queryKey }) => {
      const queryKeyParamsIndex = 1;
      const reqChatRoomMessages = queryKey[queryKeyParamsIndex];
      const res = await chatApi.fetchChatRoomMessages(reqChatRoomMessages);
      return res;
    },
  });
};
