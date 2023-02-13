import React from 'react';

import InfoText from './InfoText';
import InfoListItem from './InfoListIlem';

const SampleModule: React.FC = () => (

    <ul className="pl-9">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Especialistas en Rehabilitación
          <a href="#" className="text-primary text-base font-bold ml-3">
            Patología del manguito de los rotadores
          </a>
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Medicina del deporte
          <a href="#" className="text-primary text-base font-bold ml-3">
            Módulo 2, Tema 2
          </a>
        </InfoText>
      </InfoListItem>
    </ul>

);

export default SampleModule;
