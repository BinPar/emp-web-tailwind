import React from 'react';
import InfoListItem from './InfoListIlem';

import InfoText from './InfoText';

const ContentModule: React.FC = () => (
  <ol>
      <li className="before:!list-none">
        <InfoText className="font-bold border-b pb-2 text-gray-400">
          Módulo 1. Ecografía básica
        </InfoText>
        <ol className="pl-5">
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Aspectos generales de la ecografía</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">
              Manejo del ecógrafo y ecografía de las estructuras fundamentales
            </InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">
              Artefactos sonográficos y cuerpos extraños
            </InfoText>
          </InfoListItem>
        </ol>
      </li>
      <li className="before:!list-none">
        <InfoText className="font-bold border-b pb-2 text-gray-400">
          Módulo 2. Ecografía de miembro superior: 1ª parte
        </InfoText>
        <ol className="pl-5">
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Anatomía normal y ecográfica del hombro</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Patología del manguito de los rotadores</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Otras patologías del hombro</InfoText>
          </InfoListItem>
        </ol>
      </li>
      <li className="before:!list-none">
        <InfoText className="font-bold border-b pb-2 text-gray-400">
          Módulo 3. Ecografía de miembro superior: 2ª parte
        </InfoText>
        <ol className="pl-5">
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Anatomía normal y ecografía del codo</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Patología del codo</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">
              Anatomía normal y ecográfica de la muñeca
            </InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Patología de la muñeca</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Anatomía normal y ecográfica de la mano</InfoText>
          </InfoListItem>
          <InfoListItem className="flex items-center mb-4">
            <InfoText className="pl-2 mb-0 ml-5">Patología de la mano</InfoText>
          </InfoListItem>
        </ol>
      </li>
    </ol>

);

export default ContentModule;
