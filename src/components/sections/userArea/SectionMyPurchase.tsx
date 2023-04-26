import Box from '../../icons/Box';
import CalendarLittle from '../../icons/CalendarLitle';
import CartLight from '../../icons/CartLight';
import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import ActionButton from './ActionButton';
import ItemPurchaseLong from './ItemPurchaseLong';
import MyProfileLi from './MyProfileLi';

const SectionMyPurchase: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <SubHeader>MIS COMPRAS</SubHeader>
      <ItemPurchaseLong
        id="ES576565454"
        state="Aceptado"
        date="20/02/2023"
        amount="1 producto"
        paymentMethod="Tarjeta de crédito"
        total="30 días gratuitos (después 24,90 €)"
      />
      <ItemPurchaseLong
        id="ES576565454"
        state="Aceptado"
        date="20/02/2023"
        amount="1 producto"
        paymentMethod="Tarjeta de crédito"
        total="30 días gratuitos (después 24,90 €)"
      />
      <ItemPurchaseLong
        id="ES576565454"
        state="Aceptado"
        date="20/02/2023"
        amount="1 producto"
        paymentMethod="Tarjeta de crédito"
        total="30 días gratuitos (después 24,90 €)"
      />
      <ItemPurchaseLong
        id="ES576565454"
        state="Aceptado"
        date="20/02/2023"
        amount="1 producto"
        paymentMethod="Tarjeta de crédito"
        total="30 días gratuitos (después 24,90 €)"
      />
      <ItemPurchaseLong
        id="ES576565454"
        state="Aceptado"
        date="20/02/2023"
        amount="1 producto"
        paymentMethod="Tarjeta de crédito"
        total="30 días gratuitos (después 24,90 €)"
      />
    </DivWrapper>
  </section>
);
export default SectionMyPurchase;
