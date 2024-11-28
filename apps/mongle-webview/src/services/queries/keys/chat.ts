import { ReqChatRoomMessages } from '@/services/types/chat';

export const chatKeys = {
  chatMessagesKey: (params: ReqChatRoomMessages) =>
    ['chatRoomMessage', params] as const,
  chatRoomsKey: (token: string) => ['chatRooms', token] as const,
};
