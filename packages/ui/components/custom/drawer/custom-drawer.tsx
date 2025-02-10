'use client';

import * as React from 'react';
import {
  Drawer,
  DrawerContent as BaseDrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerFooter,
} from '@mgmg/ui/components/ui/drawer';
import { cn } from '@mgmg/ui/lib/utils';
import { CloseIcon } from '@mgmg/ui/components/icons';

// DrawerContent를 커스텀
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof BaseDrawerContent>,
  React.ComponentPropsWithoutRef<typeof BaseDrawerContent> & {
    showCloseIcon?: boolean;
  }
>(({ className, children, showCloseIcon = true, ...props }, ref) => (
  <BaseDrawerContent ref={ref} className={cn('relative', className)} {...props}>
    {showCloseIcon && (
      <DrawerClose className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full">
        <CloseIcon width={14} height={14} />
      </DrawerClose>
    )}
    <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
    {children}
  </BaseDrawerContent>
));
DrawerContent.displayName = 'DrawerContent';

// 사용하기 편하도록 모든 컴포넌트를 하나의 객체로 export
const CustomDrawer = {
  Root: Drawer,
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Close: DrawerClose,
} as const;

export default CustomDrawer;
