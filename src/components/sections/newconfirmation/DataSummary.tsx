
const DataSummary: React.FC = () => {
  const PersonalData = [
    { title: 'Nombre:', data: 'Adrián Rodríguez Amago' },
    { title: 'Email:', data: 'adrian@binpar.com' },
    { title: 'Dirección de envío:', data: 'C/ Callejo 30, 1ºD 28053 Madrid españa' },
    { title: 'Dirección de Facturacción:', data: 'C/ Roncesvalles 3, 1ºB 28007 Madrid España' },
  ];
  const OthersData = [
    { title: 'Comentario:', data: 'Sin especificar' },
    { title: 'Horario:', data: 'Sin especificar' },
  ];
  const comment = 'sin especificar'
  return (
    <div className="mb-7 xs2:mb-12 md:grid grid-cols-[1fr_1fr] gap-10">
      <div className='mb-7'>
        <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
          Datos de tu pedido
        </h4>
        <ul>
          {PersonalData.map((personalData, index) => (
            <li
              key={index}
              className="text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-5 mb-2 last:mb-0"
            >
              <p className="text-gray-500 font-bold">{personalData.title}</p>
              <p className="text-sm xs:text-base">{personalData.data}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="mb-7">
          <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
            Método de pago
          </h4>
          <div className="flex items-center gap-2 text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-5 mb-2 last:mb-0">
            <p className="text-gray-500 font-bold">Método</p>
            <p className="text-base">Tarjeta de débito</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="-mt-[4px] border border-x-gray-300 rounded-md overflow-hidden p-1 min-w-12 shrink-0 w-12 h-9 flex items-center justify-center">
              <img src="/img/masterC.jpg" alt="payment method" />
            </div>
            <div className="text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-5 mb-2 last:mb-0">
              <p className="">Mastercard 02/2024</p>
              <div className="flex items-center gap-1">
                <span className="pt-[6px]">**** **** ****</span>
                <span> 4565</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg xs2:text-xl text-gray-500 font-semibold tracking-[.8px] xs2:tracking-[1.2px] items-center mb-5 after:content-[''] after:h-[2px] after:bg-gray-200 after:w-full after:rounded-full after:block after:mt-1">
            Otros detalles
          </h4>
          <ul aria-current={comment === 'sin especificar' } className='aria-current:flex items-start gap-10'>
            {OthersData.map((othersData, index) => (
              <li
                key={index}
                className="text-xs xs:text-sm text-gray-400 font-medium tracking-[.9px] leading-5 mb-2 last:mb-0"
              >
                <p className="text-gray-500 font-bold">{othersData.title}</p>
                <p className="text-sm xs:text-base">{othersData.data}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DataSummary;
