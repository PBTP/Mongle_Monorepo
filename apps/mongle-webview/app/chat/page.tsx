import { getAuthCookie } from '@/utils/auth';
import ChatContainer from './_components/chat-container';
import { getQueryClient } from 'app/get-query-client';
import { chatKeys } from '@/services/queries/keys/chat';
import { createServerChatApi } from '@/services/api/chat';

export default function ChatPage() {
  const queryClient = getQueryClient();
  const { accessToken } = getAuthCookie();

  if (accessToken) {
    const serverChatApi = createServerChatApi(accessToken);
    queryClient.prefetchQuery({
      queryKey: chatKeys.chatRoomsKey(accessToken),
      queryFn: () => serverChatApi.fetchChatRooms(),
    });
  }

  return <ChatContainer />;
}
