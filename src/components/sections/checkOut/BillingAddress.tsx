import { useState } from 'react';
import SubHeader from '../items/SubHeader';
import AddressForm from './AddressForm';
import AddressOptions from './AddressOptions';

const BillingAddress: React.FC = () => {
  const [billingAddress, SetBillingAddress] = useState(false);
  return (
    <div>
      <SubHeader className="mt-5 flex justify-between">
        DIRECCIÓN DE FACTURACIÓN
        <button type="button" className="text-xs" onClick={(): void => SetBillingAddress(!billingAddress)}>
          {!billingAddress ? 'AGREGAR' : 'CANCELAR'}
        </button>
      </SubHeader>
      <AddressOptions/>
      {billingAddress && <AddressForm />}
    </div>
  );
};

export default BillingAddress;
