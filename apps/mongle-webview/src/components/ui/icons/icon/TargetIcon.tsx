import TargetIconSvg from '@/assets/icon/target.svg';
import { IconProps } from '../types';

const TargetIcon = ({ width, height, className }: IconProps) => {
  return <TargetIconSvg className={className} width={width} height={height} />;
};

export default TargetIcon;
