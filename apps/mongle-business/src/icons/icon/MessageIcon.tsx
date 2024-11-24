import MessageSvg from '@/assets/icon/message.svg?react';
import { IconProps } from '../types';

const MessageIcon = ({ width, height, className, onClick }: IconProps) => {
  return <MessageSvg className={className} width={width} height={height} onClick={onClick} />;
};

export default MessageIcon;