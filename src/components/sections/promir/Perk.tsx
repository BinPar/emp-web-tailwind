import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
interface PerkProps {
  title: string;
  text: string;
}
const Perk: React.FC<WithClassName<PerkProps>> = ({ className, title, text }) => (
  <li className={twMerge('p-7 flex  flex-col justify-between', className)}>
    <div>
    <h2 className="text-white text-lg font-light tracking-[1px] pb-3 mb-5 border-b border-white">
      {title}
    </h2>
    <p className="text-white text-2sm font-light">{text}</p>
    </div>
    <button
      type="button"
      className="border-2 max-w-[108px] items-center border-white px-4 min-h-[40px] uppercase text-white hover:bg-white hover:text-promirLight mt-5"
    >
      ver más
    </button>
  </li>
);
export default Perk;
