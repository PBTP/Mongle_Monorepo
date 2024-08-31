import BellSvg from '@/assets/icon/bell.svg?react';
import { IconProps } from '../types';

const BellIcon = ({ width, height, className, onClick }: IconProps) => {
  return <BellSvg className={className} width={width} height={height} onClick={onClick} />;
};

export default BellIcon;
