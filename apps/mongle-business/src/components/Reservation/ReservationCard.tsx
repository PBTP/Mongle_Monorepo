import { MessageIcon, PhoneIcon } from '@/icons/icon';
import styles from './ReservationCard.module.scss'
/**
 * TODO: props로 예약자 정보를 받는다.
 * @returns 
 * 
 */
const ReservationCard = () => {
  return (
    <div className={styles.ReservationCardWrapper}>
      <div className={styles.ReservationCardContent}>
        <div className={styles.ReservationStatusWrapper}>
          <div className={styles.ReservationStatusLine}>
            <div className={styles.ReservationDday}>D-1</div>
            <div className={styles.ReservationStatusText}>예약 확정</div>
            <div>|</div>
            <div className={`${styles.ReservationStatusText}  ${styles.Gray}`}>결제 완료</div>
          </div>
          <div className={styles.ReservationInfo}>
            <MessageIcon width={24} height={24} />
            <PhoneIcon width={24} height={24} />
          </div>
        </div>
        <div className={styles.ReservationPetInfo}>알래스칸 말라뮤트 | 36kg</div>
        <div className={styles.ReservationLocation}>서울 강남구</div>
        <div className={styles.ReservationDate}>2024.04.06(토) 오후 1:00</div>
      </div>
    </div>
  );
}

export default ReservationCard;