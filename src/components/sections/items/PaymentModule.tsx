import React from 'react';

import InfoText from './InfoText';
import InfoListItem from './InfoListIlem';

const PaymentModule: React.FC = () => (
  <>
    <InfoText className="pl-2 mb-2">
      Ofrecemos todas las facilidades en el pago, pudiendo realizarlo a través de los siguientes
      métodos:
    </InfoText>
    <ul className="pl-9">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Tarjeta de crédito o débito (pago al contado)</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Paypal (pago al contado)</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Domiciliación bancaria, pudiendo elegir entre pagar al contado o en{' '}
          <span className="font-bold text-gray-400">6 cómodos plazos sin intereses</span> (únicamente con cuentas
          bancarias españolas).
        </InfoText>
      </InfoListItem>
    </ul>
  </>
);

export default PaymentModule;
