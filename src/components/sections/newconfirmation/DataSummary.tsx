import CheckItem from '../newCheckOut/CheckItem';

const DataSummary: React.FC = () => (
  <div className="grid grid-cols-[1fr_1fr] gap-10">
    <div>
      <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
        Datos de tu pedido
      </h4>
      <ul>
        <li className="text-sm xs2:text-base tracking-[.8px] xs2:tracking-[1.2px] mb-2 last:mb-0">
          <p className="text-gray-500 font-semibold">Nombre:</p>
          <p className="text-gray-400 font-light">Adrián Rodríguez Amago</p>
        </li>
        <li className="text-sm xs2:text-base tracking-[.8px] xs2:tracking-[1.2px] mb-2 last:mb-0">
          <p className="text-gray-500 font-semibold">Email:</p>
          <p className="text-gray-400 font-light">adrian@binpar.com</p>
        </li>
        <li className="text-sm xs2:text-base tracking-[.8px] xs2:tracking-[1.2px] mb-2 last:mb-0">
          <p className="text-gray-500 font-semibold">Dirección de envío:</p>
          <p className="text-gray-400 font-light">C/ Callejo 30, 1ºD 28053 Madrid españa</p>
        </li>
        <li className="text-sm xs2:text-base tracking-[.8px] xs2:tracking-[1.2px] mb-2 last:mb-0">
          <p className="text-gray-500 font-semibold">Dirección de Facturacción</p>
          <p className="text-gray-400 font-light">C/ Roncesvalles 3, 1ºB 28007 Madrid España</p>
        </li>
      </ul>
    </div>
    <div>
      <div className="mb-10">
        <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
          Método de pago
        </h4>
        <div className="flex items-center gap-2">
          <p className="text-gray-500 font-semibold">Método</p>
          <p className="text-gray-400 font-light">Tarjeta de débito</p>
        </div>
        <div className="flex">
          <div className="border border-x-gray-300 rounded-md overflow-hidden p-1 min-w-12 shrink-0 w-9 h-7 flex items-center justify-center">
            <img src="/img/masterC.jpg" alt="payment method" />
          </div>
          <div className='text-gray-400 font-light'>
            <p className="leading-[18px]">Mastercard 02/2024</p>
            <p className="leading-[18px]">**** **** **** 4565</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
          Otros detalles
        </h4>
        <ul>
          <li className="text-sm xs2:text-base tracking-[.8px] xs2:tracking-[1.2px] mb-2 last:mb-0">
            <p className="text-gray-500 font-semibold">Comentario:</p>
            <p className="text-gray-400 font-light">Sin especificar</p>
          </li>
          <li className="text-sm xs2:text-base tracking-[.8px] xs2:tracking-[1.2px] mb-2 last:mb-0">
            <p className="text-gray-500 font-semibold">Horario:</p>
            <p className="text-gray-400 font-light">Sin especificar</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
export default DataSummary;
