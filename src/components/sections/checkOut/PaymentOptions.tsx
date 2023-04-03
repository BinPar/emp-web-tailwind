import Card from '../../icons/Card';
import Paypal from '../../icons/Paypal';
import Visa from '../../icons/Visa';
import FormOptionsItem from './FormOptionsItem';

const PaymentOptions: React.FC = () => (
  <>
    <form className="flex flex-wrap gap-5 mb-5">
      <FormOptionsItem
        className="lg:w-[calc((100%_/_2)_-_10px)]"
        option="creditCard"
        value="creditCard"
        alias="Tarjeta de crédito"
      >
        <Card className="w-8" />
      </FormOptionsItem>
      <FormOptionsItem
        className="lg:w-[calc((100%_/_2)_-_10px)]"
        option="paypal"
        value="paypal"
        alias="Paypal"
      >
        <Paypal className="w-8" />
      </FormOptionsItem>
    </form>
    </>
);
export default PaymentOptions;
