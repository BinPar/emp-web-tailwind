import { useState } from 'react';
import SwitchButton from '../filters/SwitchButton';
import SubHeader from '../items/SubHeader';
import AddressForm from './AddressForm';
import AddressOptions from './AddressOptions';
import BillingAddress from './BillingAddress';

const DeliveryAddress: React.FC = () => {
  const [addAddress, SetAddAddress] = useState(false);
  const [openMore, SetOpenMore] = useState(false);

  return (
    <div>
      <SubHeader className="mt-5 flex justify-between">
        DIRECCIÓN DE ENVÍO
        <button type="button" className="text-xs" onClick={(): void => SetAddAddress(!addAddress)}>
          {!addAddress ? 'AGREGAR' : 'CANCELAR'}
        </button>
      </SubHeader>
      <AddressOptions />
      <SwitchButton method={SetOpenMore} value={openMore} title='Especificar una dirección diferente para la facturación'/>
      {addAddress && <AddressForm className='my-10'/>}
      {openMore && <BillingAddress />}
    </div>
  );
};
export default DeliveryAddress;
