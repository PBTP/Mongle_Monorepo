import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './SignUpCertification.module.scss';
import ContentField from '@/components/common/ContentField/ContentField';
import Button from '@/components/common/Button/Button';
import apis from '@/hooks/api';
import { useLocation } from 'react-router';
import useTimer from '@/hooks/useTimer';

const CERTIFICATION_MINUTE = 5;

interface CheckCertificationProps {
  onNextStep: (phone: string) => void;
}
const CheckCertification = ({ onNextStep }: CheckCertificationProps) => {
  const location = useLocation();

  const [certificationInfo, setCertificationInfo] = useState({
    phone: location.state,
    certificationNumber: '',
  });

  const handleCertificationInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCertificationInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { useCheckCertificationNumber } = apis.signupApi;
  const { mutate: checkCertification, isSuccess: checkCertificationSuccess } =
    useCheckCertificationNumber();

  const { time, timeOut, resetTimer, startTimer } = useTimer(CERTIFICATION_MINUTE);

  const buttonDisabled = !Object.values(certificationInfo).every((item) => item) && !timeOut;

  const handleCertification = () => {
    checkCertification(certificationInfo);
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (checkCertificationSuccess) onNextStep(certificationInfo.phone);
  }, [checkCertificationSuccess]);

  return (
    <div>
      <div className={styles.SignupPhoneHeader}>인증번호</div>
      <ContentField
        className={styles.SignupPhoneInputWrapper}
        backgroundColor="White"
        border="Border"
      >
        <input
          onChange={handleCertificationInfo}
          placeholder="인증번호"
          type="number"
          className={styles.Content}
          name="certificationNumber"
          autoComplete="one-time-code"
        />
        <span className={styles.SubContent}>{time}</span>
      </ContentField>

      <div className={styles.SignupPhoneHeader}>연락처</div>
      <ContentField
        className={styles.SignupPhoneInputWrapper}
        backgroundColor="White"
        border="Border"
      >
        <input
          onChange={handleCertificationInfo}
          placeholder="010-0000-0000"
          type="tell"
          className={`${styles.Content} ${styles.Disabled}`}
          value={certificationInfo.phone}
          name="phone"
          readOnly
        />
        <span className={styles.SubContent} onClick={resetTimer}>
          재요청
        </span>
      </ContentField>
      <Button
        onClick={handleCertification}
        className={styles.CertificationButton}
        buttonType={buttonDisabled ? 'Disabled' : 'Primary'}
      >
        인증번호 확인
      </Button>
      <div className={styles.CertificationDescription}>
        <div>인증번호 발송에는 시간이 소요됩니다.</div>
        <div>인증번호는 문자메시지로 발송되며, 수신하지 못했다면 차단된 메시지를 확인해주세요.</div>
      </div>
    </div>
  );
};

export default CheckCertification;
