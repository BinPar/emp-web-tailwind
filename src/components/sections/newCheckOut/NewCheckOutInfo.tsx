import { SetStateAction } from 'react';
import Trash from '../../icons/Trash';
import CheckoutItemList from './CheckoutItemList';
import OrderCheckout from './OrderCheckout';
import CheckoutItemCollection from './CartItemCollectionProps';
import CartItemCollection from './CartItemCollectionProps';


interface NewCheckOutInfoProps {
  method: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  code: boolean;
  mode?: string;
}

const src = '/img/colle.jpg';
const title = 'Mi Eureka - Biblioteca de Anestesiología y Reanimación';
const data ='La colección Mi Eureka Biblioteca de Anestesia ofrece acceso a todo el contenido de Editorial Médica Panamericana en el campo de la Anestesiología. Una colección de más de 35 obras en formato digital que facilita la consulta y el apoyo a la toma de decisión clínica de los médicos especialistas y residentes de Anestesiología. Desde cada obra se podrá acceder directamente a todos sus recursos multimedia y materiales complementarios (imágenes, vídeos, casos clínicos, etc.), con una excelente experiencia de uso.';
const type = 'colección';

const NewCheckOutInfo: React.FC<NewCheckOutInfoProps> = ({ method, value, code, mode }) => (
  <>
    <div className='mb-5 after:content-[""] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1'>
      <div className="flex justify-between items-center">
        <h4 className="hidden sm:flex text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
          Resumen de compra
          {mode !== 'collection' && (
            <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
          )}
        </h4>
        <h4 className="flex sm:hidden text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center">
          Resumen
          {mode !== 'collection' && (
            <span className="text-gray-400 text-xs tracking-[.8px] ml-3">(2 Prod.)</span>
          )}
        </h4>
        {mode !== 'collection' && (
          <button
            type="button"
            className="text-2.5xs xs2:text-xs tracking-[.8px] font-light text-gray-400 uppercase flex items-center hover:text-primary transition-all duration-300"
          >
            <span className="hidden sm:block">vaciar el carrito</span>
            <span className="sm:hidden">vaciar</span>
            <Trash className="w-5 h-5 ml-1" />
          </button>
        )}
      </div>
    </div>
    {mode !== 'collection' ? (
      <CheckoutItemList />
    ) : (
      <CartItemCollection src={src} title={title} description={data} type={type} />
    )}
    {mode !== 'collection' ? (
      <OrderCheckout code={code} className="lg:hidden block" method={method} value={value} />
    ) : (
      <OrderCheckout code={code} className="lg:hidden block" method={method} value={value} isCollection/>
    )}
    
  </>
);
export default NewCheckOutInfo;
