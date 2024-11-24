import ReservationCard from '@/components/Reservation/ReservationCard';
import styles from './ReservationPage.module.scss';
import { BellIcon } from '@/icons/icon';
import ReservationStatusCard from '@/components/Reservation/ReservationStatusCard';
import ReservationBottomDrawer from '@/components/Reservation/ReservationBottomDrawer';
import ReservationStatusToggle from '@/components/Reservation/ReservationToggle';

const ReservationPage = () => {
  return (
    <>
      <div className={styles.ReservationHeaderContent}>
        <div className={styles.ReservationTitle}>개신남 3호점</div>
        <BellIcon width={24} height={24} />
      </div>
      <ReservationStatusCard />
      <ReservationCard />
      <ReservationBottomDrawer />
      <ReservationStatusToggle />
    </>
  );
}

export default ReservationPage