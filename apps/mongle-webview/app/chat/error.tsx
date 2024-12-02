'use client';
interface ChatErrorProps {
  error: Error;
}

const ChatError = ({ error }: ChatErrorProps) => {
  return <div>{error.message}</div>;
};

export default ChatError;
