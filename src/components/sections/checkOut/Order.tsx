import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import ProductSelection from '../items/ProductSelection';
import ProductWarranty from '../items/ProductWarranty';
import OrderResume from './OrderResume';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const Order = ({className}:WithClassName) => {
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
    <div className={classNames(
      'lg:flex lg:fixed lg:justify-end lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] transition-all delay-75',
      { 'lg:-translate-y-28': isShrunk },
    )}>
      <div
        className={twMerge(
          'mb-8 relative lg:mb-0 w-[calc(100%_+_50px)] -left-6 lg:left-auto mt-5 lg:mt-0 lg:max-w-[250px] xl:max-w-[310px] bg-white',
          className,
        )}
      >
        <ProductSelection title="Tu pedido" />
        <OrderResume />
        <ProductWarranty />
      </div>
    </div>
  );
};

export default Order;
