import Edit from '../../icons/Edit';
interface PersonalInfoProps {
    method: React.Dispatch<React.SetStateAction<string>>;
    value: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({method, value}) => (
  <div className='mb-7 xs2:mb-12'>
    <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      <div className="flex justify-between items-center">
        <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
          Datos Personales
        </h4>
        <button
          type="button"
          className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
        onClick={():void => method('personalInfo')}
        >
          editar
          <Edit className="w-7 h-7" />
        </button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-x-10 gap-y-1 xs2:gap-y-2  flex-wrap text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-5">
      <p>Adrián Rodríguez Amago</p>
      <p>adrian@binpar.com</p>
      <p>+34 657 938 912</p>
      <p>DNI - 50908709s</p>
    </div>
  </div>
);
export default PersonalInfo;
