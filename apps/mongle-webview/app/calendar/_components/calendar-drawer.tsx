'use client';
import CMCalendar from '@/components/ui/common/Calendar/Calendar';
import {
  Text,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Button,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@mgmg/ui/components/ui';
import { CloseIcon } from '@mgmg/ui/components/icons';
import React, { useState } from 'react';
import { CalendarSelectedDate } from '@/components/ui/common/Calendar/calendar-type';
import { sendDataToNative } from '@mgmg/native/events';
import { format } from '@mgmg/lib/utils/date';
interface CalendarDrawerProps {
  isOpen?: boolean;
  asChild?: React.ReactNode;
}

const CalendarDrawer = ({ isOpen = true, asChild }: CalendarDrawerProps) => {
  const [selectedDate, setSelectedDate] = useState<CalendarSelectedDate>(
    new Date()
  );
  const disabled = !selectedDate;

  const onConfirm = () => {
    if (!selectedDate) return;
    const formattedDate = format(selectedDate as Date, 'yyyy-MM-dd');
    sendDataToNative('calendar', { date: formattedDate });
  };

  const handleDateChange = (date: CalendarSelectedDate) => {
    setSelectedDate(date);
  };

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger asChild={!!asChild}>{asChild && asChild}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center relative">
            <Text typography="md-m">날짜 선택</Text>
            <DrawerClose asChild>
              <CloseIcon
                className="absolute right-0 top-1/2 -translate-y-1/2"
                width={24}
                height={24}
              />
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerDescription asChild>
          <div className="px-4">
            <div className="mb-6">
              <CMCalendar onDateChange={handleDateChange} />
            </div>
            <div className="w-full pb-3">
              <Button fullWidth disabled={disabled} onClick={onConfirm}>
                확인
              </Button>
            </div>
          </div>
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};

export default CalendarDrawer;
