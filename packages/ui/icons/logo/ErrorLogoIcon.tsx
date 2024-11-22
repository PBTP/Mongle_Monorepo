import ErrorSvg from '@/assets/logo/error.svg?react';
import { IconProps } from '../types';

const ViteLogoIcon = ({ width, height, className }: IconProps) => {
  return <ErrorSvg className={className} width={width} height={height} />;
};

export default ViteLogoIcon;
