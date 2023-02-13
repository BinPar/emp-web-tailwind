import React from 'react';

import InfoText from './InfoText';

const IntroductionModule: React.FC = () => (
  <>
    <InfoText>
      Los ecógrafos han mejorado mucho en calidad y resolución y la técnica se ha expandido hacia
      otras especialidades. Es por esto que la ecografía musculoesquelética se ha desarrollado
      tremendamente en los últimos 7-8 años.
    </InfoText>
    <InfoText className="mb-0">
      Este proyecto busca integrar la experiencia de sus participantes con el nuevo desarrollo
      tecnológico y la posibilidad de cambiar la forma de enseñar ecografía, que al ser una técnica
      dinámica, pierde con los métodos tradicionales de aprendizaje en libros.
    </InfoText>
  </>
);

export default IntroductionModule;
