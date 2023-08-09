const Fail: React.FC = () => (
  <>
    <h1 className="uppercase text-xl font-bold tracking-[1.2px] text-[#ff725e] mb-5 sm:text-left text-center">
      HA HABIDO UN PROBLE CON TU PEDIDO: #333CGTD
    </h1>
    <div className="border-[1.5px] px-5 sm:pl-0 py-5 bg-white border-gray-200 rounded-xl drop-shadow-lg relative sm:flex items-center">
      <img
        alt="confirmation process"
        src="/img/fail.svg"
        className="w-[90%] m-auto sm:ml-0 mb-8 sm:w-3/5 max-w-[700px] sm:relative -left-[3.2%]"
      />
      
      <div className="flex items center justify-center w-full sm:text-left text-center mb-8 sm:mb-0">
        <div>
          <img
            alt="panamericana logotipo"
            src="/img/panaLogo.svg"
            className="max-w-[230px] mb-8 m-auto sm:ml-0"
          />
          <h2 className="text-lg font-bold leading-6 tracking-[1.2px] text-[#ff725e] mb-5">
            Lo sentimos! Ha ocurrido un<br />
            problema al tranmitar tu pedido
          </h2>
          <p className="text-gray-400 font-semibold tracking-[.8px] mb-5">
            Estamos intentando solucionar el problema, vuelve a intentarlo transcurridos unos minutos. Si el problema persiste, ponte en contacto a través de:
          </p>
          <p className="text-gray-500 text-sm font-semibold tracking-[.8px]">pedidos@medicapanamericana.es</p>
          <a
            href="index"
            className="bg-[#ff725e] flex items-center justify-center xs2:w-fit xs2:m-auto sm:ml-0 !mt-5 text-white text-1xs font-bold uppercase tracking-[3px] h-10 w-full xs2:px-7 rounded-lg"
          >
            volver a la web
          </a>
        </div>
      </div>
    </div>
  </>
);
export default Fail;
