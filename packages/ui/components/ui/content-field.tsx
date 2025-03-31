import React, { forwardRef, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@mgmg/ui/lib/utils';

const contentFieldVariants = cva(
  // 기본 스타일
  'w-full rounded-md px-4 py-3',
  {
    variants: {
      variant: {
        default: 'bg-background-white border border-border-gray',
        secondary: 'bg-gray-100',
        outline: 'bg-white border border-gray-200',
        ghost: 'bg-transparent',
      },
      size: {
        sm: 'p-2',
        md: 'px-4 py-3',
        lg: 'p-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface ContentFieldProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof contentFieldVariants> {
  children: ReactNode;
}
export type ContentFieldVariants = VariantProps<typeof contentFieldVariants>;
export type ContentFieldVariantType = NonNullable<ContentFieldVariants['variant']>;
export type ContentFieldSizeType = NonNullable<ContentFieldVariants['size']>;

const ContentField = forwardRef<HTMLDivElement, ContentFieldProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(contentFieldVariants({ variant, size }), className)} {...props}>
        {children}
      </div>
    );
  }
);

ContentField.displayName = 'ContentField';

export default ContentField;
