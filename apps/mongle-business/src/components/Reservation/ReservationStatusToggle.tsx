import styles from './ReservationStatusToggle.module.scss';

type ReservationStatusToggleType = {
  isDragging: boolean;
}

const ReservationStatusToggle = ({isDragging}:ReservationStatusToggleType) => {
  return <div className={`${styles.ReservationStatusToggleWrapper} ${isDragging}`}>전체23</div>;
}

export default ReservationStatusToggle;