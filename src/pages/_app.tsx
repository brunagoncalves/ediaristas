import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import Head from 'next/head';

import { Header } from 'ui/components/surfaces/Header';
import { Footer } from 'ui/components/surfaces/Footer';

import { theme } from 'ui/themes/theme';
import { AppContainer } from '@styles/pages/app.style';
import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
      </Head>

      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
