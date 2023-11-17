import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import ContextWrapper from '@/context/ContextWrapper';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
};
