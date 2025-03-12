import DeleteXSvg from '@mgmg/ui/assets/icon/x-close.svg';
import { IconProps } from './types';

const CloseIcon = ({ width, height, className, onClick }: IconProps) => {
  return <DeleteXSvg className={className} width={width} height={height} onClick={onClick} />;
};

export default CloseIcon;
