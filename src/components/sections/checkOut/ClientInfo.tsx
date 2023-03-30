import DeliveryAddress from './DeliveryAddress';
import MoreDetails from './MoreDetails';
import PersonalData from './PersonalData';

const ClientInfo: React.FC = () => (
  <div>
    <PersonalData />
    <DeliveryAddress />
    <MoreDetails />
  </div>
);
export default ClientInfo;
