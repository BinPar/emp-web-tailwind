import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
interface ButtonProductProps {
  title: string;
  selected: Dispatch<SetStateAction<string>>;
  value: string;
  bg: string;
  color: string;
  src: string;
}

const ButtonProduct: React.FC<ButtonProductProps> = ({
  title,
  bg,
  color,
  src,
  selected,
  value,
}) => {
  {
    console.log(value, title);
  }
  return (
    <li className="relative">
      <button
        type="button"
        className={`aria-current:min-h-[84px] min-h-[60px] rounded-xs transition-all duration-200 uppercase text-2sm max-w-[160px] py-3 px-4 peer tracking-[1px] ${bg} ${color}`}
        onClick={(): void => {
          value !== title ? selected(title) : selected('');
        }}
        aria-current={value === title}
      >
        {title}
      </button>
      <Image
        className="absolute left-[calc(50%_-_22px)] -top-[17px] peer-aria-current:opacity-100 opacity-0 transition-all duration-150"
        alt="isotipo"
        width={45}
        height={30}
        src={`/img/${src}`}
      />
    </li>
  );
};
export default ButtonProduct;
