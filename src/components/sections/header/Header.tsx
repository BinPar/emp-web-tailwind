import BannerPromo from './BannerPromo';
import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderMobile from './HeaderMobile';
import HeaderTop from './HeaderTop';

const Header: React.FC = () => (
  <header className="relative" id="header">
    <BannerPromo />
    <div className="hidden lg:block">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </div>
    <div className="block lg:hidden">
      <HeaderMobile />
    </div>
  </header>
);
export default Header;
