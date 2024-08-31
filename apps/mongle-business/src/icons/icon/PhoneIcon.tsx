import PhoneSvg from '@/assets/icon/phone.svg?react';
import { IconProps } from '../types';

const PhoneIcon = ({ width, height, className, onClick }: IconProps) => {
  return <PhoneSvg className={className} width={width} height={height} onClick={onClick} />;
};

export default PhoneIcon;
