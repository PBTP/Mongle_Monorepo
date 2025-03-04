'use client';
import { ArrowRightIcon } from '@/components/ui/icons/icon';
import { tileClassName } from '@/utils/date';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.module.scss';
import styles from './Calendar.module.scss';
import { CalendarSelectedDate } from './calendar-type';
interface CMCalendarProps {
  onDateChange?: (date: CalendarSelectedDate) => void;
  initialDate?: CalendarSelectedDate;
}

const CMCalendar = ({ onDateChange, initialDate }: CMCalendarProps) => {
  const [date, setDate] = useState<CalendarSelectedDate>(
    initialDate || new Date()
  ); // 현재 날짜로 초기화

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const onChange = (selectedDate: CalendarSelectedDate) => {
    setDate(selectedDate);
    onDateChange?.(selectedDate);
  };

  return (
    <div className={styles.calendar}>
      <Calendar
        onChange={onChange}
        value={date}
        calendarType="gregory"
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        minDate={today}
        tileClassName={tileClassName}
        prevLabel={
          <ArrowRightIcon
            width={20}
            height={20}
            className={styles.PrevArrowIcon}
          />
        }
        nextLabel={
          <ArrowRightIcon
            width={20}
            height={20}
            className={styles.NextArrowIcon}
          />
        }
        formatDay={(_locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default CMCalendar;
