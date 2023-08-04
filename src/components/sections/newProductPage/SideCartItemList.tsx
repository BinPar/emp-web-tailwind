import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SideCartItemProps {
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

const Item: React.FC<SideCartItemProps> = ({ title, src, isbn, type, oldPrice, finalPrice }) => (
  <li className='pt-3 first-of-type:pt-0 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
    <div className="flex gap-2 items-center">
      <Image className="w-24 h-24" alt="item" src={`/img/${src}`} width="1038" height="1046" />
      <div>
        <p className="text-base text-gray-400 font-medium tracking-[.9px] mb-2 line-clamp-2 leading-5">
          {title}
        </p>
        <p className="text-sm text-primary font-medium tracking-[.9px] mb-2">
          <span className="mr-2">ISBN</span>
          {isbn}
        </p>
        <p className="bg-primary/30 text-2.5xs text-primary uppercase w-fit px-2 rounded-sm">
          {type}
        </p>
      </div>
    </div>
    <div className="flex items-center justify-between mt-1">
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
        <button
          type="button"
          className="text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
        >
          eliminar
        </button>
      </div>
      <div>
        <div className="flex relative justify-end items-start">
          <div className="flex items-center gap-[2px] pt-1">
            <p className="text-gray-400 text-1xs tracking-widest line-through decoration-1">
              {oldPrice}
            </p>
            <span className="text-2xs no-underline text-gray-400">€</span>
          </div>
          <div className="flex gap-1 ml-3">
            <p className="text-gray-500 text-2xl font-bold">{finalPrice}</p>
            <span className="text-1xs text-gray-500 font-black">€</span>
          </div>
        </div>
        <p className="text-gray-400 text-2xs tracking-[.8px] text-right -mt-1">(IVA incluido)</p>
      </div>
    </div>
  </li>
);

const SideCartItemList: React.FC = () => {
  const [sideCartItem, setSideCartItem] = useState<React.ReactNode>();

  useEffect(() => {
    setSideCartItem(
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
  return <ul className="max-h-[calc(100%_-_400px)] overflow-y-auto pr-2">{sideCartItem}</ul>;
};
export default SideCartItemList;
