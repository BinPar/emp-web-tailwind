import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import PromirP from './PromirP';
import TextWithImage from './TextWithImage';

const TutorialsIntro: React.FC = () => (
  <>
    <DivWrapper className="my-10">
      <SubHeader>TUTORÍAS</SubHeader>
      <PromirP>
        Nuestro equipo docente cuenta con años de experiencia en la preparación del examen MIR y
        estará a tu lado durante todo el camino. Podrás resolver tus dudas de contenido de la
        plataforma con los Directores Científicos o Coordinadores de Asignaturas. Y si en cualquier
        momento, necesitaras asesoramiento sobre tu preparación o buscaras algún tipo de
        orientación, podrás acudir a tu tutor personal a través de una videollamada.
      </PromirP>
    </DivWrapper>
    <TextWithImage
      title="TU TUTOR PERSONAL"
      src="tutorPersonal.jpg"
      alt="personal mentor"
      alignRight
    >
      <PromirP>
        El primer día que ingreses en la plataforma se te asignará tu propio tutor. Un médico que
        está haciendo la Residencia y que hace no mucho ha estado en tu misma situación. Podrás
        acudir a él o a ella siempre que lo necesites y hasta el día que te presentes al examen. Su
        función será orientarte en todo momento sobre tu estudio y preparación. Estará al tanto de
        tus avances en el estudio, tus puntos débiles y tus fortalezas gracias a toda la información
        que le proporciona la plataforma.
      </PromirP>
      <h3 className="w-full uppercase text-gray-400 mt-5 font-light text-2sm tracking-[1px]">
        TU TUTOR SERÁ TU APOYO EN TU CAMINO HACIA EL EXAMEN MIR
      </h3>
    </TextWithImage>
    <TextWithImage
      title="¿CÓMO TE COMUNICAS CON TU TUTOR?"
      src="citasConTutor.jpg"
      alt="tutor appointments"
    >
      <PromirP>
        Podrás estar en continua comunicación con tutor siempre que quieras. A través de la
        plataforma accederás a su agenda de tutorías y podrás reservar entre las fechas que tenga
        disponibles la que mejor te convenga.
        <span className="mt-10px block">¡Así de fácil!</span>
      </PromirP>
      <h3 className="w-full uppercase text-gray-400 mt-5 font-light text-2sm tracking-[1px]">
        HAZ UNA VIDEOLLAMADA A TU TUTOR SIEMPRE QUE LO NECESITES
      </h3>
    </TextWithImage>
    <TextWithImage
      title="PREGUNTA CUANDO TE SURJA UNA DUDA"
      src="cafe.jpg"
      alt="questions"
      alignRight
    >
      <PromirP>
        Durante tu aprendizaje te surgirán dudas y querrás resolverlas lo antes posible. En PROMIR
        no queremos que interrumpas tu estudio, por eso hemos pensado que lo más cómodo para ti es
        hacer la pregunta al docente, autor del texto, directamente en el contenido que estás
        estudiando.
      </PromirP>
      <PromirP className="mt-5">En seguida tendrás una respuesta con la solución.</PromirP>
    </TextWithImage>
    <TextWithImage
      title="MÁS VIDEOCLASES INTEGRADAS EN EL CONTENIDO"
      src="videoClases.jpg"
      alt="video lessons"
    >
      <PromirP>
        Queremos que tu estudio sea lo más interactivo posible, así que hemos integrado nuevas
        videoclases dentro del contenido que tienes que estudiar. Estos vídeos explicativos están
        protagonizados por los autores del texto que estás estudiando.
      </PromirP>
    </TextWithImage>
  </>
);
export default TutorialsIntro;
