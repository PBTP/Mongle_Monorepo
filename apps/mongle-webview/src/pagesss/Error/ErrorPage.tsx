import { ErrorLogoIcon } from '@/components/ui/icons/logo';
import styles from './Error.module.scss';

interface ErrorProps {
  type?: 'notFound' | 'error';
}

const ErrorPage = ({ type = 'error' }: ErrorProps) => {
  const errorType = {
    notFound: {
      title: '페이지를 찾을 수 없습니다.',
      content: '잠시후, 다시 시도해 주세요.',
    },
    error: {
      title: '비정상적인 접근입니다.',
      content: '로그인 후 이용해 주세요.',
    },
  };
  return (
    <div className={styles.ErrorWrapper}>
      <ErrorLogoIcon width={66} height={64} />
      <div className={styles.ErrorContent}>
        <div className={styles.ErrorTitle}>불편을 드려 죄송합니다</div>
        <div>{errorType[type].title}</div>
        <div>{errorType[type].content}</div>
      </div>
    </div>
  );
};

export default ErrorPage;
