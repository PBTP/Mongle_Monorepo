import React from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';
import styles from './ReservationBottomDrawer.module.scss';
import { DeleteXIcon } from '@/icons/icon';
import Button from '../common/Button/Button';

const ReservationBottomDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="btn">예약창 오픈</button>
      </DrawerTrigger>
      <DrawerOverlay className="CustomDrawerOverlay" />
      <DrawerContent className="fixed bottom-0 left-0 right-0 z-[1001] p-4 bg-white rounded-t-lg shadow-lg transform translate-y-full transition-transform duration-300 ease-out">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="pt-14 text-black text-center text-2xl font-bold leading-8">
              예약요청이 왔습니다.
            </DrawerTitle>
            <DrawerDescription className="pt-4 text-black text-center text-base font-medium leading-5">
              일정 확인 후 최대한 빨리 예약을 수락해주세요.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerClose>
            <DeleteXIcon width={16} height={16} className={styles.ReservationDrawerCloseIcon} />
          </DrawerClose>
          <div className={styles.ReservationDrawerCard}>
            <div className={styles.ReservationCardTitle}>알래스칸 말라뮤트 | 36kg</div>
            <div className={styles.ReservationCardInfoWrapper}>
              <div className={styles.ReservationCardInfoLeftValue}>일정</div>
              <div className={styles.ReservationCardInfoRightValue}>
                <span>2024. 05. 15 오후 1시</span>
              </div>
            </div>
            <div className={styles.ReservationCardInfoWrapper}>
              <div className={styles.ReservationCardInfoLeftValue}>위치</div>
              <div className={styles.ReservationCardInfoRightValue}>
                서울시 양천구 ㅇㅇ근린공원 주차장
              </div>
            </div>
            <div className={styles.ReservationCardInfoWrapper}>
              <div className={styles.ReservationCardInfoLeftValue}>정보</div>
              <div className={styles.ReservationCardInfoRightValue}>대형견 | 장모종</div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button buttonType="Primary" className={styles.ReservationDrawerConfrimButton}>
                예약 확정
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReservationBottomDrawer;
