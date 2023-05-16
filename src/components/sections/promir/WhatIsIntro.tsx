import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import PromirP from './PromirP';

const WhatIsIntro: React.FC = () => (
  <DivWrapper className="mb-10">
    <div className="py-10">
      <SubHeader className="text-center lg:text-left">¿QUÉ ES PROMIR?</SubHeader>
      <div className="lg:flex lg:gap-10 lg:mb-10">
        <PromirP className="mb-5 lg:mb-0 lg:w-2/4 text-center lg:text-left">
          PROMIR es un Entorno Virtual de Aprendizaje, que te permitirá realizar de forma simultánea
          el estudio y el entrenamiento necesarios para presentarte al examen MIR.
        </PromirP>
        <PromirP className="lg:w-2/4 text-center lg:text-left">
          Basada en un sistema de Inteligencia Artificial, esta revolucionaria plataforma, analizará
          de forma continua tu proceso de aprendizaje, para alcanzar el máximo rendimiento en el
          menor tiempo posible, a modo de entrenador personal.
        </PromirP>
      </div>
    </div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/iZd3KOzDRFc"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full m-auto max-w-[840px] lg:min-h-[472px]"
    ></iframe>
    <div className="lg:flex my-12">
      <div className="lg:w-2/4">
        <h3 className="w-full text-center lg:text-left mb-5 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
          PREGUNTAS MIR Y SIMULACROS
        </h3>
        <PromirP className="text-center lg:text-left">
          Más de 35.000 preguntas, que incluyen las de los 16 últimos años del examen MIR y
          preguntas PROMIR. Practica con entrenamientos tipo test y empieza a entrenar la técnica de
          examen con simulacros MIR, en los que todas las preguntas y respuestas están vinculadas a
          los contenidos.
          <br />
          <br />
          PROMIR te ofrece la posibilidad de buscar preguntas por temática o palabra clave, e
          incluso generar y personalizar tus tests de entrenamiento.
        </PromirP>
      </div>
      <div className="lg:w-2/4 py-8 lg:px-10">
        <p className="p-1 bg-promirLight text-white text-4xl font-light text-center">
          Más de <strong>35.000 preguntas</strong>, que incluyen las de los 12 últimos años del
          examen MIR.
        </p>
      </div>
    </div>
  </DivWrapper>
);
export default WhatIsIntro;
