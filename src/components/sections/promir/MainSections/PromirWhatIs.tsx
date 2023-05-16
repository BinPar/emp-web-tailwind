import SubHeader from '../../items/SubHeader';
import PromirP from '../PromirP';
import Image from 'next/image';
import TextWithImage from '../TextWithImage';
import DivWrapper from '../../items/DivWrapper';
import WhatIsIntro from '../WhatIsIntro';

const PromirWhatIs: React.FC = () => (
  <section>
    <WhatIsIntro />
    <TextWithImage
      title="CONTENIDOS ENRIQUECIDOS Y PERSONALIZABLES"
      alt="rich content"
      src="comunicate.jpg"
      alignRight
    >
      <PromirP className="mb-5 text-center lg:text-left">
        Elaborados por prestigiosos profesionales expertos en formación médica. La vinculación de
        textos y recursos audiovisuales te permitirá acceder a cualquier información relacionada y
        en cada tema tendrás vinculadas las preguntas MIR. Podrás personalizar tus apuntes
        subrayando contenidos y añadiendo notas o marcadores, e imprimirlos siempre que los
        necesites.
      </PromirP>
      <PromirP className="text-center lg:text-left">
        El Dr. Jesús Corres, Médico Adjunto de Urgencias y Jefe de Estudios del Hospital
        Universitario Ramón y Cajal, y el Dr. Miguel Castillo, Facultativo Especialista en
        Cardiología, del mismo hospital, son los directores de contenidos que han coordinado a un
        equipo docente especializado de más de 66 autores.
      </PromirP>
    </TextWithImage>
    <TextWithImage title="ENTRENAMIENTOS TIPO TEST" alt="training" src="entrenamientos.jpg">
      <PromirP className="text-center lg:text-left">
        El sistema de aprendizaje de PROMIR está basado en la práctica. Con Promir contestarás
        muchas preguntas. Más que con cualquier otro método. La plataforma creará entrenamientos
        personalizados teniendo en cuenta tus debilidades y fortalezas en cada momento, acelerando
        así tu evolución en la preparación del examen.
      </PromirP>
    </TextWithImage>
    <TextWithImage title="SIEMPRE A TU LADO" alt="coffee" src="cafe.jpg" alignRight>
      <PromirP className="text-center lg:text-left">
        Nuestro equipo docente cuenta con años de experiencia en la preparación del examen MIR y te
        acompañará durante todo el camino. Tendrás acceso a ellos cuando y donde quieras, y podrás
        hacer preguntas directamente sobre los contenidos de la plataforma. Recibirás siempre una
        respuesta en el menor tiempo posible.
      </PromirP>
    </TextWithImage>
  </section>
);
export default PromirWhatIs;
