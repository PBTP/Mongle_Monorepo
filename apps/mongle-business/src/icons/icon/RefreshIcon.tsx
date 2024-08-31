import RefreshSvg from '@/assets/icon/refresh.svg?react';
import { IconProps } from '../types';

const RefreshIcon = ({ width, height, className, onClick }: IconProps) => {
  return <RefreshSvg className={className} width={width} height={height} onClick={onClick} />;
};

export default RefreshIcon;
