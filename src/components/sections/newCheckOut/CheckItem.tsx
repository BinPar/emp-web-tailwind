import { Dispatch, SetStateAction, useState } from 'react';
import Trash from '../../icons/Trash';

interface CheckItemProps {
  value: string;
  data1: string;
  data2?: string;
  state: string;
  src?: string;
  src2?: string;
  haveDelete?: boolean;
  method: Dispatch<SetStateAction<string>>;
}
const CheckItem: React.FC<CheckItemProps> = ({
  value,
  state,
  data1,
  data2,
  src,
  src2,
  method,
  haveDelete,
}) => (
  <label
    aria-current={state === value}
    className="w-full justify-between lg2:justify-start lg2:w-fit flex items-center gap-2 xs:gap-5 group text-xs xs:text-sm text-gray-400 aria-current:text-primary transition-all duration-300 font-medium tracking-[.9px] leading-5 lg2:pr-[3%] lg2:border-r-2 last:pr-0 last:border-r-0 border-r-gray-100 lg2:mb-5"
  >
    <div className="flex gap-2 xs:gap-5 items-center">
      <span className="block group-hover:brightness-[.7] min-w-5 xs2:min-w-7 shrink-0 w-5 xs2:w-6 h-5 xs2:h-6 border-[1.5px] border-gray-300 group-aria-current:border-[6px] xs2:group-aria-current:border-[7px] transition-all duration-300 group-aria-current:border-primary  rounded-full" />
      {!!src ? (
        <div className="flex items-center gap-2">
          <div className={`${!!src && 'flex gap-2'}`}>
            <div className="border border-x-gray-300 rounded-md overflow-hidden p-1 min-w-12 shrink-0 w-9 h-7 flex items-center justify-center">
              <img src={src} alt="payment method" />
            </div>
            {!!src2 && (
              <div className="border border-x-gray-300 rounded-md overflow-hidden p-1 min-w-12 shrink-0 w-9 h-7 flex items-center justify-center">
                <img src={src2} alt="payment method" />
              </div>
            )}
          </div>
          <p className='leading-[18px]'>{data1}</p>
        </div>
      ) : (
        <div>
          <p className='leading-[18px]'>{data1}</p>
          {!!data2 && <p className='leading-[18px]'>{data2}</p>}
        </div>
      )}

      <input
        type="checkbox"
        className="appearance-none"
        value={value}
        onClick={(): void => {
          state === '' ? method(value) : state !== value && method(value);
        }}
      />
    </div>

    {haveDelete && (
      <button
        type="button"
        className="shrink-0 w-8 xs2:w-9 h-8 xs2:h-9 flex items-center justify-center border border-gray-200 rounded-full bg-whiteSmoke hover:bg-white hover:shadow-sp1 hover:border-white transition-all duration-300"
      >
        <Trash className="xs2:w-5 xs2:h-5 w-4 h-4 text-gray-400" />
      </button>
    )}
  </label>
);

export default CheckItem;
