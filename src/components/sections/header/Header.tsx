import { useEffect, useState } from 'react';

import classNames from 'classnames';
import BannerPromo from './BannerPromo';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)) {
          return true;
        }

        if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={classNames(
        'fixed w-full top-0 z-30 bg-white transition-all duration-150 border-b border-gray-200',
        { 'shadow-sm': isShrunk },
      )}
    >
      <BannerPromo />
      <div className="hidden lg:block">
        <HeaderTop isShrunk={isShrunk} />
        <HeaderMiddle isShrunk={isShrunk} />
        <HeaderBottom isShrunk={isShrunk} />
      </div>
      <div className="block lg:hidden">
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
