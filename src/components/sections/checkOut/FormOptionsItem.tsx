import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import type { WithChildren } from '../../../model/react';

interface AddressOptionProps {
  option: string;
  value: string;
  alias: string;
  type?: string;
}

const FormOptionsItem: React.FC<WithClassName<WithChildren<AddressOptionProps>>> = ({
  option,
  value,
  alias,
  type,
  children,
  className,
}) => (
  <div
    className={twMerge(
      'group relative w-full md:w-[calc((100%_/_2)_-_10px)] lg:w-[calc((100%_/_3)_-_14px)]',
      className,
    )}
  >
    <input
      type="radio"
      name="addressOption"
      id={option}
      value={option}
      className="w-full h-full cursor-pointer appearance-none border-4 border-transparent checked:border-primary absolute peer"
    />
    {type !== 'creditCard' ? (
      <div className="h-[89px] border border-gray-300 peer-checked:text-primary group-hover:text-primary peer-checked:font-semibold font-light text-gray-400 text-1xs flex flex-col py-4 items-center group-hover:border-primary">
        {children && <div>{children}</div>}
        <label
          htmlFor="radio3"
          className={`mt-1 ${type === 'address' && 'uppercase font-semibold'}`}
        >
          {alias}
        </label>
        {type === 'address' && <p className="mt-1">{value}</p>}
      </div>
    ) : (
      <div className="h-[89px] border border-gray-300 peer-checked:text-primary group-hover:text-primary peer-checked:font-semibold font-light text-gray-400 flex py-4 items-center justify-center group-hover:border-primary">
        {children && <div>{children}</div>}
        <div>
          <label htmlFor="radio3" className="mt-1 font-semibold">
            {value}
          </label>
          <p className='font-light -mt-2'>{alias}</p>
        </div>
      </div>
    )}
  </div>
);

export default FormOptionsItem;
