import { RefreshIcon } from '@/icons/icon';
import styles from './ReservationStatusCard.module.scss';
const ReservationStatusCard = () => {
  return (
    <div className={styles.ReservationStatusCardWrapper}>
      <div className={styles.ReservationStatusCardContent}>
        <div className={styles.ReservationStatusCardLine}>
          <div className={styles.ReservationStatusCardTitle}>예약 현황</div>
          <RefreshIcon width={16} height={16} />
        </div>
        {/* 각 예약별 카테고리 ex: 확정 대기, 오늘 확정 등등.. */}
        <div className={styles.ReservationStatusCardLine}>
          <div>
            <div className={styles.ReservationStatusCount}>12</div>
            <div className={styles.ReservationStatusText}>확정 대기</div>
          </div>
          <div>
            <div className={styles.ReservationStatusCount}>5</div>
            <div className={styles.ReservationStatusText}>오늘 확정</div>
          </div>
          <div>
            <div className={styles.ReservationStatusCount}>2</div>
            <div className={styles.ReservationStatusText}>오늘 이용</div>
          </div>
          <div>
            <div className={styles.ReservationStatusCount}>1</div>
            <div className={styles.ReservationStatusText}>오늘 취소</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationStatusCard