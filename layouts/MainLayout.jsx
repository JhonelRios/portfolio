import Header from '../components/Header';
import Body from '../components/Body';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <Body>{children}</Body>
    </>
  );
}
