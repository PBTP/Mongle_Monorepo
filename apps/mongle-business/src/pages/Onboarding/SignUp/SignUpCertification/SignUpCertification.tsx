import { useEffect, useState } from 'react';
import styles from './SignUpCertification.module.scss';
import ContentField from '@/components/common/ContentField/ContentField';
import Button from '@/components/common/Button/Button';
import apis from '@/hooks/api';
import { displayPhoneNumber } from '@/utils/format';

const VALIDATE_PHONE_LENGTH = 13;
interface SignUpCertificationProps {
  onNextStep: (phone: string) => void;
}
const SignUpCertification = ({ onNextStep }: SignUpCertificationProps) => {
  const [phone, setPhone] = useState('');
  const { useCertificationNumber } = apis.signupApi;
  const { mutate: requestCertification, isSuccess: requestCertificationSuccess } =
    useCertificationNumber();

  const onRequestCertification = () => {
    requestCertification({ phone });
  };

  const buttonDisabled = phone.length !== VALIDATE_PHONE_LENGTH;

  useEffect(() => {
    if (requestCertificationSuccess) {
      onNextStep(phone);
    }
  }, [requestCertificationSuccess]);

  return (
    <div>
      <div className={styles.SignupPhoneHeader}>연락처</div>
      <ContentField
        className={styles.SignupPhoneInputWrapper}
        backgroundColor="White"
        border="Border"
      >
        <input
          onChange={(e) => setPhone(e.target.value)}
          placeholder="010-0000-0000"
          type="tell"
          value={displayPhoneNumber(phone)}
          className={styles.Content}
          maxLength={13}
        />
      </ContentField>
      <Button
        onClick={onRequestCertification}
        className={styles.CertificationButton}
        buttonType={buttonDisabled ? 'Disabled' : 'Primary'}
      >
        인증번호 전송
      </Button>
      <div className={styles.CertificationDescription}>
        <div>인증번호 발송에는 시간이 소요됩니다.</div>
        <div>인증번호는 문자메시지로 발송되며, 수신하지 못했다면 차단된 메시지를 확인해주세요.</div>
      </div>
    </div>
  );
};

export default SignUpCertification;
