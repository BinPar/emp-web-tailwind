import { useState } from 'react';
import DeliveryAddress from './DeliveryAddress';
import MoreDetails from './MoreDetails';
import PaymentMethods from './PaymentMethods';
import PersonalData from './PersonalData';

const ClientInfo: React.FC = () => {
  const [continueBtn, SetContinueBtn] = useState(false);
  return (
    <div>
      <PersonalData />
      <DeliveryAddress />
      <MoreDetails setContinue={SetContinueBtn} value={continueBtn} />
      {continueBtn && <PaymentMethods />}
    </div>
  );
};
export default ClientInfo;
