import SwitchButton from '../filters/SwitchButton';
import TextArea from './TextArea';
import TimeSelector from './TimeSelector';

const OtherInfo: React.FC = () => (
  <div className="mb-7 xs2:mb-12">
    <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
      Otros datos
    </h4>
    <form className="lg:grid grid-cols-[1.5fr_1fr] gap-5">
      <TextArea valueInput=' ' label='Dejar comentario' id='titi' initialHeight='120'/>
      <div>
      <TimeSelector label='Horario de entrega' className='mb-5'/>
      <SwitchButton title='Deseo recibir factura' className='text-xs tracking-[.8px] font-normal text-gray-400'/>
      </div>
    </form>
  </div>
);
export default OtherInfo;
