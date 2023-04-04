import OrderData from './OrderData';

const ConfirmOrder: React.FC = () => (
  <article className="lg:pr-12 mt-8 lg:mb-20">
    <OrderData title="DIRECCIÓN DE FACTURACIÓN" data="c/falsa, 1, 1b, 28004, madrid, España" />
    <OrderData title="MÉTODO DE PAGO" data="Tarjeta de Crédito o Débito" />
    <OrderData title="MODO DE PAGO" data="Después 878,75€ (al contado)" />
    <OrderData title="MÁS DETALLES" data="Sin especificaciones" />
    <button
      type="button"
      className="bg-greencart text-white text-1xs uppercase tracking-[1px] h-10 block m-auto mt-5 px-6 aria-current:hidden"
    >
      Pagar con tarjeta
    </button>
  </article>
);
export default ConfirmOrder;
