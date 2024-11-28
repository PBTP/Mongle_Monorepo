import '@/styles/global.scss';
import type { Metadata } from 'next';
import Providers from './provider';
import AuthProvider from './auth-provider';
import { cookies } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mongle',
    description: 'Mongle Webview',
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('AUTH')?.value;
  return (
    <html lang="ko">
      <body>
        <AuthProvider authCookie={cookieValue ?? ''}>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
