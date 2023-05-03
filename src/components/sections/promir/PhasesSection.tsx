import DivWrapper from '../items/DivWrapper'
import ButtonPromir from './ButtonPromir'
import HeaderPromir from './HeaderPromir'
import PhasesList from './PhasesList'
import PromirP from './PromirP'

const PhasesSection: React.FC = () => (
    <section className="py-10">
    <DivWrapper className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-2/4 text-center lg:text-left">
        <HeaderPromir className='text-left'>Fases de estudio </HeaderPromir>
        <PromirP className="mb-7">
          La metodología de PROMIR se estructura en cuatro fases y se aplica en todos los cursos
          que PROMIR ofrece, adaptando el calendario a la convocatoria que te presentas y a la
          fecha en la que te matricules.
        </PromirP>
        <ButtonPromir link href="#">
          saber mas
        </ButtonPromir>
      </div>
      <PhasesList />
    </DivWrapper>
  </section>
)
export default PhasesSection
