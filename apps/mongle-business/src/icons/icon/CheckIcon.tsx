import CheckIconSvg from '@/assets/icon/check.svg?react';
import { IconProps } from '../types';
/**
 *
 * 해당 아이콘은 stroke값이 default none입니다.
 */
const CheckIcon = ({ width, height, className, stroke }: IconProps) => {
  return (
    <CheckIconSvg
      className={className}
      width={width}
      height={height}
      stroke={stroke}
    />
  );
};

export default CheckIcon;
