const Success: React.FC = () => (
  <>
    <h1 className="uppercase text-xl font-bold tracking-[1.2px] text-primary mb-5 sm:text-left text-center">
      PAGO REALIZADO CON EXITO EN TU PEDIDO: #333CGTD
    </h1>
    <div className="border-[1.5px] px-5 sm:pl-0 py-5 bg-white border-gray-200 rounded-xl drop-shadow-lg relative sm:flex items-center">
      <img
        alt="confirmation process"
        src="/img/ok.svg"
        className="w-3/5 max-w-[700px] relative -left-[3.2%] hidden sm:block"
      />
      <img
        alt="confirmation process"
        src="/img/okLittle.svg"
        className="w-[90%] m-auto mb-10 sm:hidden"
      />
      <div className="flex items center justify-center w-full sm:text-left text-center mb-8 sm:mb-0">
        <div>
          <img
            alt="panamericana logotipo"
            src="/img/panaLogo.svg"
            className="max-w-[230px] mb-8 m-auto sm:ml-0"
          />
          <h2 className="text-lg font-bold leading-6 tracking-[1.2px] text-primary mb-5">
            Gracias por confiar en <br />
            Editorial Médica Panamericana
          </h2>
          <p className="text-gray-400 max-w-[350px] font-semibold tracking-[.8px] mb-5">
            Tu pedido ha sido un éxito! Te Hemos enviado un correo con los datos a:
          </p>
          <p className="text-gray-500 text-lg font-semibold tracking-[.8px]">adrian@binpar.com</p>
          <a
            href="index"
            className="bg-primary flex items-center justify-center xs2:w-fit xs2:m-auto sm:ml-0 !mt-5 text-white text-1xs font-bold uppercase tracking-[3px] h-10 w-full xs2:px-7 rounded-lg"
          >
            volver a la web
          </a>
        </div>
      </div>
    </div>
  </>
);
export default Success;
