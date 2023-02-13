import React from 'react';

import InfoText from './InfoText';
import InfoListItem from './InfoListIlem';

const ObjetivesModule: React.FC = () => (
  <>
    <InfoText className="font-bold border-b pb-2 text-gray-400">Objetivos generales</InfoText>
    <ul className="columns-2 pl-9 gap-12">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Aprender a localizar las diferentes estructuras anatómicas de la región
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Identificar las patologías susceptibles de ser diagnosticadas por esa técnica
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">Conocer sus límites para dicho diagnóstico</InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Permitir una evaluación de la lesión diagnosticada Objetivos específicos**
        </InfoText>
      </InfoListItem>
    </ul>
    <InfoText className="font-bold border-b pb-2 text-gray-400 mt-5">
      Módulo 1. Ecografía básica
    </InfoText>
    <ul className="columns-2 pl-9 gap-12">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Aprender en qué consiste el ultrasonido, como se aplica a la medicina y su historia además
          de conocer los componentes comunes de una máquina de ecografía.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Identificar mediante el uso de ecografía las estructuras fundamentales (los músculos,
          nervios, tendones, etc.), las imágenes extrañas debidas a as propiedades del US
          (artefactos) y como se pueden usar éstos a nuestro favor.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Aprender para qué sirve y como se utilizan el Doppler y la elastografía en aparato
          locomotor y como se ven los cuerpos extraños con ecografía atendiendo a los diferentes
          materiales de que están compuestos.
        </InfoText>
      </InfoListItem>
    </ul>
    <InfoText className="font-bold border-b pb-2 text-gray-400 mt-5">
      Módulo 2. Ecografía de miembro superior: hombro
    </InfoText>
    <ul className="columns-2 pl-9 gap-12">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Conocer todas las estructuras anatómicas del hombro y como verlas a través de la
          ecografía, así como a realizar las maniobras dinámicas diagnósticas más habituales.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Valorar las lesiones de los tendones del manguito de los rotadores, y diferenciar
          parciales o completas así como cuantificarlas de acuerdo a las clasificaciones más
          utilizadas en la actualidad.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          Identificar otras patologías del hombro como lesiones de articulación acromioclavicular,
          patología del bíceps, fracturas, bursitis, tumores y capsulitis entre otras.
        </InfoText>
      </InfoListItem>
    </ul>
  </>
);

export default ObjetivesModule;
