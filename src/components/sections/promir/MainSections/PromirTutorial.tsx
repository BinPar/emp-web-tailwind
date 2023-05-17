import DivWrapper from '../../items/DivWrapper';
import PromirP from '../PromirP';
import SubjectList from '../SubjectList';
import TextWithImage from '../TextWithImage';
import TutorialTeam from '../TutorialTeam';
import TutorialsIntro from '../TutorialsIntro';

const PromirTutorial: React.FC = () => (
  <section>
    <TutorialsIntro />
    <TutorialTeam />
    <DivWrapper>
      <h3 className="w-full my-5 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
        COORDINADORES DE TUTORÍAS
      </h3>
      <TextWithImage src="coordinadores.png" alt="coordinadores" alignRight>
        <PromirP className="text-center lg:pr-10">
          El equipo de tutores de PROMIR estará disponible durante toda la preparación a través de
          videollamada, email o WhatsApp.
        </PromirP>
      </TextWithImage>
    </DivWrapper>
    <SubjectList />
  </section>
);
export default PromirTutorial;
