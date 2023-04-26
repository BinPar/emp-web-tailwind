import InputForms from '../checkOut/InputForms';
import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';

const SectionMyCodes: React.FC = () => (
  <section className="my-10">
    <DivWrapper>
      <SubHeader>MIS CÓDIGOS</SubHeader>
      <p className="uppercase text-center text-primary font-semibold tracking-[.8px] mb-7">
        canjea tu código
      </p>
      <form className="flex gap-5 justify-center w-full">
        <InputForms
          type="text"
          id="code"
          label="Código *"
          className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
        />
        <button
          type="submit"
          className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 w-24 block"
        >
          Canjear
        </button>
      </form>
    </DivWrapper>
  </section>
);
export default SectionMyCodes;
