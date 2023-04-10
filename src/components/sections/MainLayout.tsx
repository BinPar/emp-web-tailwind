import type { WithChildren } from '../../model/react';
import Footer from './Footer';
import Header from './header/Header';
import TestHeader from './header/TestHeader';

const MainLayout: React.FC<WithChildren> = ({ children }) => (
  <>
    <TestHeader />
    <main>
      {children}
    </main>
    <Footer />
  </>
);
export default MainLayout;
