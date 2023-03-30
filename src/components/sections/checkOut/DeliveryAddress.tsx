import { useState } from 'react';
import SubHeader from '../items/SubHeader';
import AddressForm from './AddressForm';

const DeliveryAddress: React.FC = () => {
  const [addAddress, SetAddAddress] = useState(false);
  return (
    <div>
      <SubHeader className="mt-5 flex justify-between">
        DIRECCIÓN DE ENVÍO
        <button type="button" className='text-xs' onClick={(): void => SetAddAddress(!addAddress)}>{!addAddress ? 'AGREGAR' : 'CANCELAR'}</button>
      </SubHeader>
      {addAddress && <AddressForm />}
      
    </div>
  );
};
export default DeliveryAddress;
