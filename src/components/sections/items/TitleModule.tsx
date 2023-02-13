import React from 'react';

import InfoText from './InfoText';
import InfoListItem from './InfoListIlem';

const TitleModule: React.FC = () => (
  <>
    <InfoText className="pl-2 mb-2">
      Título de <span className="font-bold text-gray-400">Experto en Ecografía Musculoesquelética</span>, expedido
      por la <span className="font-bold text-gray-400">Universidad Francisco de Vitoria.</span>
    </InfoText>
    <InfoText className="pl-2 mb-2">
      Para obtener el certificado de experto el alumno deberá realizar las evaluaciones propuestas,
      correspondiendo cada una de ellas a uno de los módulos de título y obtener una nota de todas
      estas evaluaciones superior a 5.
    </InfoText>
    <ul className="pl-9">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          <span className="font-bold text-gray-400">Título propio:</span> Experto en Ecografía Musculoesquelética
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          <span className="font-bold text-gray-400">ECTS:</span> 25
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Este título aporta méritos y conocimientos válidos para su carrera profesional y reúne los
          requisitos comúnmente solicitados en las Oposiciones y Bolsas de Trabajo.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          No obstante, recomendamos revisar las bases de las convocatorias de su CCAA, ya que están
          sujetas a cambios.
        </InfoText>
      </InfoListItem>
    </ul>
  </>
);

export default TitleModule;
