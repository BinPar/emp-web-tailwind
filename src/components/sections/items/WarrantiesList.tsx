import WarrantieItem from './WarratieItem';

const WarrantiesList: React.FC = () => (
  <ul className="w-[150px] pl-4">
    <WarrantieItem>
      ENVÍO <span className="font-bold">GRATIS</span>
    </WarrantieItem>
    <WarrantieItem>
      ENTREGA
      <span className="font-bold">
        HASTA 72H LABORABLES EN PENÍNSULA. HASTA 7 DÍAS LABORABLES EN CANARIAS Y BALEARES
      </span>
    </WarrantieItem>
    <WarrantieItem>
      <span className="font-bold">TARJETA CRÉDITO/DÉBITO, PAYPAL O DOMICILIACIÓN BANCARIA</span>{' '}
      (PAGO ÚNICO O EN CUOTAS)
    </WarrantieItem>
    <WarrantieItem>
      100% <span className="font-bold">SEGURO</span>
    </WarrantieItem>
  </ul>
);
export default WarrantiesList;
