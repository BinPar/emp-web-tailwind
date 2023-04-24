import type { WithChildren } from '../../model/react';
import Footer from './Footer';
import Header from './header/Header';

const MainLayout: React.FC<WithChildren> = ({ children }) => (
  <>
    <Header />
    <main className='mt-32 lg:mt-64'>
      {children}
    </main>
    <Footer />
  </>
);
export default MainLayout;
