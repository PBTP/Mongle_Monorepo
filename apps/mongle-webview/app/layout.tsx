import type { Metadata } from 'next';
import Providers from './provider';
import AuthProvider from './auth-provider';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import '@/styles/global.scss';
import styles from './layout.module.scss';
import '@mgmg/ui/global/styles';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Mongle',
    description: 'Mongle Webview',
  };
}

const font = localFont({
  src: '../src/assets/fonts/PretendardVariable.woff2',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('AUTH')?.value;
  return (
    <html lang="ko" className={font.className}>
      <body>
        <AuthProvider authCookie={cookieValue ?? ''}>
          <main className={styles.Main}>
            <Providers>{children}</Providers>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
