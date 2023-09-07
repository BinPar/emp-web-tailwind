import Trash from '../../icons/Trash';
import CartItemCollection from '../newCheckOut/CartItemCollectionProps';
import CheckoutItemList from '../newCheckOut/CheckoutItemList';
import OrderCheckout from '../newCheckOut/OrderCheckout';
import ConfirmationItemList from './ConfirmationItemList';

interface ConfirmationInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  mode?: string;
}

const src = '/img/colle.jpg';
const title = 'Mi Eureka - Biblioteca de Anestesiología y Reanimación';
const data ='La colección Mi Eureka Biblioteca de Anestesia ofrece acceso a todo el contenido de Editorial Médica Panamericana en el campo de la Anestesiología. Una colección de más de 35 obras en formato digital que facilita la consulta y el apoyo a la toma de decisión clínica de los médicos especialistas y residentes de Anestesiología. Desde cada obra se podrá acceder directamente a todos sus recursos multimedia y materiales complementarios (imágenes, vídeos, casos clínicos, etc.), con una excelente experiencia de uso.';
const type = 'colección';

const ConfirmationInfo: React.FC<ConfirmationInfoProps> = ({ method, value, mode }) => (
  
  <>
    <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      <h4 className="hidden sm:flex text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
        Confirmación de compra
        <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
      </h4>
      <h4 className="flex sm:hidden text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
        Confirmación
        <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
      </h4>
    </div>
    {mode === 'collection' ? <CartItemCollection src={src} title={title} description={data} type={type} /> : <ConfirmationItemList />}
    
    <OrderCheckout isConfirmation code={true} className="lg:hidden block" method={method} value={value} />
  </>
);
export default ConfirmationInfo;
