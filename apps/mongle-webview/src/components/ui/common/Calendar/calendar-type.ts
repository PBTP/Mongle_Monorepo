export type CalendarDataPiece = Date | null;
export type CalendarSelectedDate =
  | CalendarDataPiece
  | [CalendarDataPiece, CalendarDataPiece];
