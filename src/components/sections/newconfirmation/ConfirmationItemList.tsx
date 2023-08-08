import { useEffect, useState } from 'react';
import Image from 'next/image';
import Trash from '../../icons/Trash';

interface ConfirmationItemProps {
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

const Item: React.FC<ConfirmationItemProps> = ({
  title,
  src,
  isbn,
  type,
  oldPrice,
  finalPrice,
}) => (
  <li className="pt-3 first-of-type:pt-0 border-b border-yellowmenu pb-4">
    <div className="md:grid justify-between grid-cols-[1.5fr_2.5fr] gap-2 xs2:gap-3">
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
      <div className="grid grid-cols-[3fr_.5fr] md:grid-cols-[1fr_.75fr] lg2:grid-cols-[1.5fr_1fr] gap-3 justify-between">
        <div className="flex gap-2 items-end md:items-center md:justify-center w-full">
          <p className="text-gray-400 text-xs tracking-[1px]">CANTIDAD:</p>
          <p className="w-fit px-1 text-gray-500 leading-[20px] text-lg font-bold">1</p>
        </div>

        <div className="flex justify-end items-center">
          <div className="min-h-[32px] lg2:max-h-[34px] px-5 w-fit items-center lg2:py-2 flex justify-start gap-1 rounded-full bg-gray-100">
            <p className="text-gray-500 text-lg font-bold">{finalPrice}</p>
            <span className="text-1xs text-gray-500 font-black">€</span>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const ConfirmationItemList: React.FC = () => {
  const [confirmationItem, SetConfirmationItem] = useState<React.ReactNode>();

  useEffect(() => {
    SetConfirmationItem(
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
  return <ul className="pr-1 xs2:pr-2 mb-7 xs2:mb-12">{confirmationItem}</ul>;
};
export default ConfirmationItemList;
