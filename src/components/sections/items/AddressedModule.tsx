import React from 'react';

import InfoText from './InfoText';
import InfoListItem from './InfoListIlem';

const AddressedModule: React.FC = () => (
  <>
    <InfoText>Fundamentalmente a Médicos:</InfoText>
    <ul className="pl-9">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Especialistas en Rehabilitación</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Medicina del deporte</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Radiólogos</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Reumatólogos</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Traumatólogos</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Médicos generales</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Médicos del trabajo</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2">Fisioterapeutas</InfoText>
      </InfoListItem>
    </ul>
    <a href="#" className="text-primary text-base font-bold">
      ¿Cuáles son las características y requisitos necesarios para acceder a los diferentes cursos
      de Editorial Médica Panamericana (EMP)?
    </a>
  </>
);

export default AddressedModule;
