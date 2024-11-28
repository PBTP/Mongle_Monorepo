'use client';
import { useAuthStore } from '@/stores/useAuthStore';
import { useState } from 'react';
import styles from './chat-container.module.scss';
// import { useChatRooms } from '@/services/queries/useChat';
// import ChatListEdit from './chat-list-edit/chat-list-edit';
// import ChatList from './chat-list/chat-list';

const ChatContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const token = useAuthStore((state) => state.accessToken);
  // const { data: chatRoomsData } = useChatRooms(token ?? '');

  return (
    <div className={styles.ChatRoomsWrapper}>
      {token}
      {/* {isEdit ? (
        <ChatListEdit chatRoomsData={chatRoomsData} setIsEdit={setIsEdit} />
      ) : (
        <ChatList chatRoomsData={chatRoomsData} setIsEdit={setIsEdit} />
      )} */}
    </div>
  );
};

export default ChatContainer;
