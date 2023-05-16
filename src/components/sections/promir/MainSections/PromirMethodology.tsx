import DivWrapper from '../../items/DivWrapper';

import Events from '../Events';
import MethodologyIntro from '../MethodologyIntro';
import MethodologyItemsList from '../MethodologyItemsList';
import MethodologyPhases from '../MethodologyPhases';


const PromirMethodology: React.FC = () => (
  <section>
    <DivWrapper>
      <MethodologyIntro />
      <MethodologyItemsList />
      <MethodologyPhases />
      <Events />
    </DivWrapper>
  </section>
);
export default PromirMethodology;
