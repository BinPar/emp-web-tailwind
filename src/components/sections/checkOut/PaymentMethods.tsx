import SubHeader from '../items/SubHeader';
import CardSelection from './CardSelection';
import PaymentOptions from './PaymentOptions';

const PaymentMethods: React.FC = () => (
  <div>
    <SubHeader className="mt-5 flex justify-between">MÉTODOS DE PAGO</SubHeader>
    <PaymentOptions />
    <CardSelection />
  </div>
);
export default PaymentMethods;
