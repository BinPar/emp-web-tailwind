import Edit from '../../icons/Edit';

const PersonalInfo: React.FC = () => (
  <div className='mb-12'>
    <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      <div className="flex justify-between items-center">
        <h4 className="flex text-xl text-gray-500 font-semibold tracking-[1.2px] items-center">
          Datos Personales
        </h4>
        <button
          type="button"
          className="text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
        >
          editar
          <Edit className="w-7 h-7" />
        </button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-x-10 gap-y-1 xs2:gap-y-2  flex-wrap text-xs xs:text-sm xs2:text-base text-gray-400 font-medium tracking-[.9px] leading-5">
      <p>Adrián Rodríguez Amago</p>
      <p>adrian@binpar.com</p>
      <p>+34 657 938 912</p>
      <p>DNI - 50908709s</p>
    </div>
  </div>
);
export default PersonalInfo;
