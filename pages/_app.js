import '../styles/global.css';
import '../styles/variables.css';

import MainLayout from '../layouts/MainLayout';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
