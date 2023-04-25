import Image from 'next/image';
import InputForms from '../checkOut/InputForms';
import SubHeader from '../items/SubHeader';
import ItemProfile from './ItemProfile';
import RecentViews from '../items/RecentViews';
import Recommended from './Recommended';

const SectionHome: React.FC = () => (
  <>
    <section className="lg:grid grid-cols-3 gap-5 w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] m-auto pt-0 lg:pt-12 mb-5">
      <ItemProfile
        header="mis contenidos"
        title="biblioteca digital"
        src="/img/mie.png"
        text="Accede ahora a tus contenidos a través de la biblioteca MiEureka."
        textLink="acceder"
      />
      <ItemProfile
        header="mis cursos"
        src="/img/course.png"
        text="Descubre los cursos que tenemos para ti"
        textLink="ver cursos"
      />
      <ItemProfile
        header="mis oposiciones"
        src="/img/calendar.png"
        text="¿Estás pensando en opositar?"
        textLink="ver oposiciones"
      />
    </section>
    <section className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] xl3:max-w-[1440px] m-auto mb-5 p-10 bg-lightgray rounded-md shadow-profile">
      <SubHeader>MIS CÓDIGOS</SubHeader>
      <div className="flex flex-col items-center mt-10">
        <p className="uppercase text-primary font-semibold tracking-[.8px] mb-7">canjea tu código</p>
        <form className="flex gap-5 justify-center w-full">
          <InputForms
            type="text"
            id="code"
            label="Código *"
            className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
            labelClass="!bg-lightgray"
          />
          <button
            type="submit"
            className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 w-24 block"
          >
            Canjear
          </button>
        </form>
        <div className="w-[556px]">
          <Image src="/img/groupPills.jpg" alt="group pills" width={2042} height={226} />
        </div>
      </div>
    </section>
    <RecentViews />
    <Recommended />
  </>
);
export default SectionHome;
