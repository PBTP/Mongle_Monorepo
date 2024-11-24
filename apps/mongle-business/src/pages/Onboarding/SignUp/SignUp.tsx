import SignupForm from './SignupForm';
import SignUpCertification from './SignUpCertification/SignUpCertification';
import CheckCertification from './SignUpCertification/CheckCertification';
import useSearchParam from '@/hooks/useSearchParam';

const SignUp = () => {
  const [searchParam, setSearchParam] = useSearchParam('type', 'certification');

  return (
    <>
      {searchParam === 'certification' && (
        <SignUpCertification
          onNextStep={(phone: string) => setSearchParam('check', { state: phone })}
        />
      )}
      {searchParam === 'check' && (
        <CheckCertification
          onNextStep={(phone: string) => setSearchParam('signup', { state: phone })}
        />
      )}
      {searchParam === 'signup' && <SignupForm />}
    </>
  );
};

export default SignUp;
