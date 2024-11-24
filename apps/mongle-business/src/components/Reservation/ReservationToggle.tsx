import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import styles from './ReservationToggle.module.scss';

const ReservationStatusToggle = () => {
  const [activeIndex, setActiveIndex] = React.useState(0); // 초기 상태로 첫 번째 인덱스 활성화

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full overflow-x-auto"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      <CarouselContent className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0"
            style={{
              maxWidth: 'fit-content',
              scrollSnapAlign: 'start',
              marginRight: '1rem',
            }}
            onClick={() => setActiveIndex(index)} // 클릭 시 활성화된 인덱스 업데이트
          >
            <div
              className={`${styles.ReservationToggle} ${activeIndex === index ? styles.active : ''}`}
            >
              오늘 이용 {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ReservationStatusToggle;
