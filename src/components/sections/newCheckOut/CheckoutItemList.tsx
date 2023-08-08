import { useEffect, useState } from 'react';
import Image from 'next/image';
import Trash from '../../icons/Trash';

interface CheckOutItemProps {
  src: string;
  title: string;
  isbn: string;
  type: string;
  oldPrice: string;
  finalPrice: string;
}

const title = ['Electrocardiografía', 'Interacciones entre Alimentos y Medicamentos'];
const src = ['cover.jpg', 'cover.jpg'];
const type = ['DUO', 'expertos'];
const isbn = ['9788491101000', '9788491199898'];
const oldPrice = ['55', '550'];
const finalPrice = ['52,25', '522,50'];
const ItemNumber = 2;

const Item: React.FC<CheckOutItemProps> = ({ title, src, isbn, type, oldPrice, finalPrice }) => (
  <li className="pt-3 first-of-type:pt-0 border-b border-yellowmenu pb-4">
    <div className="md:grid justify-between grid-cols-[2fr_2.5fr] lg2:grid-cols-[2fr_2.5fr] gap-2 xs2:gap-3">
      <div className="flex gap-2 items-center md:max-w-[300px] xl:max-w-[350px] md:min-w-[300px] xl:min-w-[350px]">
        <Image className="w-24 h-24" alt="item" src={`/img/${src}`} width="1038" height="1046" />
        <div>
          <p className="text-sm xs2:text-base text-gray-400 font-medium tracking-[.9px] sm:mb-2 line-clamp-2 leading-5">
            {title}
          </p>
          <p className="text-xs xs2:text-sm text-primary font-medium tracking-[.9px] mb-1 sm:mb-2">
            <span className="mr-2">ISBN</span>
            {isbn}
          </p>
          <p className="bg-primary/30 text-2.5xs text-primary uppercase w-fit px-2 rounded-sm">
            {type}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[3fr_.5fr] md:grid-cols-[2fr_.5fr] lg2:grid-cols-[1.5fr_1fr] gap-3 justify-between'>
        <div className="flex gap-5 items-center justify-between mt-1 sm:min-w-[251px]">
          <div className="w-full">
            <div className="grid grid-cols-[.5fr_1.5fr] md:flex relative justify-start items-center gap-2 xs2:gap-3">
              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  className="w-6 h-6 bg-gray-200 text-gray-400 rounded-sm flex p-2 items-center justify-center"
                >
                  <span className="-mt-[2px] text-base">-</span>
                </button>
                <button
                  type="button"
                  className="w-6 h-6 bg-gray-200 text-gray-400 rounded-sm flex p-2 items-center justify-center"
                >
                  <span className="-mt-[2px] text-base">+</span>
                </button>
                <p className="w-fit px-1 text-gray-500">1</p>
              </div>
              <div className="md:border-l-2 border-gray-200 m-auto md:ml-0 md:pl-3 w-fit md:w-auto">
                <p className="hidden xs:block text-white bg-greencart rounded-sm font-bold text-2xs text-center tracking-[.8px] px-2 mb-1">
                  -5% Dto. 70 aniversario
                </p>
                <div className="flex items-start justify-end">
                  <div className="flex items-center gap-[2px] pt-1">
                    <p className="text-gray-400 text-1xs tracking-widest line-through decoration-1">
                      {oldPrice}
                    </p>
                    <span className="text-2xs no-underline text-gray-400">€</span>
                  </div>
                  <div className="flex gap-1 ml-2 xs2:ml-3">
                    <p className="text-gray-500 text-lg font-bold">{finalPrice}</p>
                    <span className="text-1xs text-gray-500 font-black">€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="min-h-[38px] lg2:max-h-[34px] w-fit font-light text-xs items-center lg2:py-2 tracking-[.8px] uppercase text-gray-400 flex justify-start gap-1 top-6 left-6 xs2:top-24 xs2:left-24 border border-gray-200 rounded-full px-2 lg2:px-3 bg-whiteSmoke hover:bg-white hover:shadow-sp1 hover:border-white transition-all duration-300"
          >
            <span className="hidden lg2:block">eliminar</span>
            <Trash className="w-5 h-5 lg2:ml-1" />
          </button>
        </div>
      </div>
    </div>
  </li>
);

const CheckoutItemList: React.FC = () => {
  const [checkOutItem, SetCheckOutItem] = useState<React.ReactNode>();

  useEffect(() => {
    SetCheckOutItem(
      Array(ItemNumber)
        .fill(0)
        .map((_, i) => (
          <Item
            // eslint-disable-next-line react/no-array-index-key
            key={`${i}`}
            title={title[i]}
            type={type[i]}
            src={src[i]}
            isbn={isbn[i]}
            oldPrice={oldPrice[i]}
            finalPrice={finalPrice[i]}
          />
        )),
    );
  }, []);
  return <ul className="pr-1 xs2:pr-2 mb-7 xs2:mb-12">{checkOutItem}</ul>;
};
export default CheckoutItemList;
