'use client';

import ErrorPage from '@/pagesss/Error/ErrorPage';

interface NotFoundProps {
  searchParams: {
    status: 'notFound' | 'error';
  };
}

export default function NotFound({ searchParams }: NotFoundProps) {
  const status = searchParams.status ?? 'notFound';

  return <ErrorPage type={status} />;
}
