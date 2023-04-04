import type { WithChildren } from '../../model/react';
import { Head } from 'next/document';
import Footer from './Footer';
import Header from './header/Header';

const MainLayout: React.FC<WithChildren> = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);
export default MainLayout;
