import React from 'react';
import Image from 'next/image';

import InfoText from './InfoText';

const DescriptionModule: React.FC = () => (
  <>
    <div className="w-72 float-right ml-5 mb-5">
      <Image alt="ufv" src="/assets/imagenProduct.jpeg" width={270} height={180} />
    </div>
    <InfoText>
      El presente curso busca promover la enseñanza de la ecografía musculoesquelética, utilizando
      los recursos que permite una formación online para mostrar los últimos avances mediante el uso
      de recursos dinámicos, como son los vídeos y las imágenes tridimensionales.
    </InfoText>
    <InfoText>
      Cada vez con mayor frecuencia se utiliza la ecografía para realizar un correcto diagnóstico de
      las patologías musculoesqueléticas, por lo que hace necesario un mejor conocimiento de dicha
      técnica y su aplicación al entorno musculoesquelético.
    </InfoText>
    <InfoText>
      El contenido del curso muestra una actualización en el diagnóstico musculoesquelético,
      cubriendo las necesidades fundamentales del profesional que quiera aprender ecografía
      musculoesquelética a un nivel avanzado.
    </InfoText>
    <InfoText>
      Cada módulo se aborda desde una visión anatómica normal de la región anatómica, para poder
      adentrarse en un mejor conocimiento de las patologías musculoesqueléticas que la afectan.
    </InfoText>
    <InfoText>
      Los profesores son profesionales de máximo prestigio en ecografía a nivel nacional e
      internacional con años de experiencia tanto en ecografía como en docencia. Además, abarca
      enfoque multidisciplinar de la materia impartida.
    </InfoText>
    <InfoText>No existe competencia de un curso similar en habla hispana.</InfoText>
    <InfoText className="mb-0">
      <span className="font-bold">
        Con la matrícula, de regalo el libro{' '}
        <a href="#" className="text-primary text-base">
          Ecografía Musculoesquelética (incluye versión digital)
        </a>
        profesores de los autores Íñigo Iriarte Posse, Carles Pedret Carballido, Ramon Balius Matas
        y Luis Cerezal Pesquera.
      </span>
    </InfoText>
  </>
);

export default DescriptionModule;
