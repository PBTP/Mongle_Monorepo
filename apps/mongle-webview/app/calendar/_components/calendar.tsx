'use client';
import { Button, Text } from '@mgmg/ui/components/ui';
import { format } from '@mgmg/lib/utils/date';
import { sendDataToNative } from '@mgmg/native/events';
import { CalendarSelectedDate } from '@/components/ui/common/Calendar/calendar-type';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { CloseIcon } from '@mgmg/ui/components/icons';

const CMCalendar = dynamic(
  () => import('@/components/ui/common/Calendar/Calendar'),
  { ssr: false }
);

const Calendar = () => {
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

  const onClose = () => {
    sendDataToNative('calendar', { date: null });
  };

  return (
    <div>
      <div className="text-center relative mb-6">
        <Text typography="md-m">날짜 선택</Text>
        <CloseIcon
          onClick={onClose}
          className="absolute right-0 top-1/2 -translate-y-1/2"
          width={24}
          height={24}
        />
      </div>
      <div className="mb-6 min-h-[319px]">
        <CMCalendar onDateChange={handleDateChange} />
      </div>
      <div className="w-full pb-3">
        <Button fullWidth disabled={disabled} onClick={onConfirm}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
