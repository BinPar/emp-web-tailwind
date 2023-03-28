import Check from '../../icons/Check';

const InputCheck: React.FC = () => (
  <div className='flex items-center gap-3 relative'>
    <input type="checkbox" id="react-option" value="" className="hidden peer" />
    <div className="absolute w-6 border border-gray-300 text-white peer-checked:text-white peer-checked:bg-primary peer-checked:border-primary peer-hover:bg-gray-50 peer-hover:text-gray-50 peer-checked:peer-hover:bg-primary">
      <Check/>
    </div>
    <label
      htmlFor="react-option"
      className="font-light text-gray-400 uppercase text-xs tracking-[1px] peer-checked:text-primary pl-9 relative z-10"
    >
      recuérdame
    </label>
  </div>
);
export default InputCheck;
