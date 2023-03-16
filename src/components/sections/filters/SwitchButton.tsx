import { useState } from 'react';

interface SwitchProps {
  title: string;
}
const SwitchButton: React.FC<SwitchProps> = ({ title }) => {
  const [active, SetActive] = useState(false);
  return (
    <div>
      <label
        htmlFor="switch"
        className={`flex items-center group gap-4${active ? ' text-primary' : ' text-gray-400'}`}
      >
        <div
          className={`flex items-center transition-all duration-300 h-6 w-11 border-2 rounded-full p-1 group-hover:brightness-[.7]${
            active ? ' border-primary' : ' border-gray-200'
          }`}
        >
          <input
            type="checkbox"
            id="switch"
            value={active ? 'true' : ''}
            onClick={(): void => SetActive(!active)}
            className="appearance-none"
          />

          <span
            className={`block w-4 h-4 transition-all duration-300 rounded-full ${
              active ? ' bg-primary translate-x-full' : ' bg-gray-300 left-[2px]'
            }`}
          />
        </div>
        <span className="group-hover:brightness-[.7] transition-all duration-300 uppercase text-xs font-bold tracking-[1px] max-w-[140px] text-left">
          {title}
        </span>
      </label>
    </div>
  );
};

export default SwitchButton;
