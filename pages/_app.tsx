import '../styles/globals.css';

import { AuthProvider } from '@/context/auth';

import Navbar from '../components/Navbar';

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
