import { cn } from '@mgmg/ui/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const textVariants = cva('text-sm font-medium text-text-default', {
  variants: {
    typography: {
      default: 'text-sm font-medium',
      'sm-b': 'text-sm font-semibold',
      'sm-m': 'text-sm font-medium',
      'sm-r': 'text-sm font-regular',
      'md-b': 'text-md font-semibold',
      'md-m': 'text-md font-medium',
      'md-r': 'text-md font-regular',
      'lg-b': 'text-lg font-semibold',
      'lg-m': 'text-lg font-medium',
      'lg-r': 'text-lg font-regular',
      'xl-b': 'text-xl font-semibold',
      'xl-m': 'text-xl font-medium',
      'xl-r': 'text-xl font-regular',
      '2xl-b': 'text-2xl font-semibold',
      '2xl-m': 'text-2xl font-medium',
      '2xl-r': 'text-2xl font-regular',
    },
    color: {
      default: 'text-text-default',
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      third: 'text-text-third',
      muted: 'text-text-muted',
      destructive: 'text-text-destructive',
      white: 'text-text-white',
      warning: 'text-text-warning',
    },
  },
  defaultVariants: {
    typography: 'default',
    color: 'default',
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

export const Text = ({ children, typography, color }: TextProps) => {
  return <span className={cn(textVariants({ typography, color }))}>{children}</span>;
};
