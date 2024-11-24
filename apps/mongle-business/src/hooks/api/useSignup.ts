import { requestAPI } from '@/utils/fetch';
import { useMutation } from '@tanstack/react-query';
import { certificationKey, signupKey } from './keys/signup';

export const SignupApi = () => {
  const useCertificationNumber = () => {
    return useMutation({
      mutationKey: certificationKey,
      mutationFn: (phoneNumber: Record<string, string>) => {
        return requestAPI().post('/', phoneNumber);
      },
    });
  };

  const useCheckCertificationNumber = () => {
    return useMutation({
      mutationKey: certificationKey,
      mutationFn: (checkInfo: Record<string, string>) => {
        return requestAPI().post('/', checkInfo);
      },
    });
  };

  const useSignup = () => {
    return useMutation({
      mutationKey: signupKey,
      mutationFn: (signupInfo: Record<string, string>) => {
        return requestAPI().post('/signup', signupInfo);
      },
    });
  };

  return { useCertificationNumber, useCheckCertificationNumber, useSignup };
};

export default SignupApi;
