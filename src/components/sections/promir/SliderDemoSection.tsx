import Image from 'next/image';
import PromirDemoForm from './PromirDemoForm';

const SliderDemoSection: React.FC = () => (
  <section className="flex flex-col xl:flex-row">
    <div className="xl:w-2/3">
      <Image
        className="min-h-[535px] object-cover"
        alt="esto sera un  slider"
        src="/img/promir-blanco-formulario.gif"
        width={1500}
        height={550}
      />
    </div>
    <PromirDemoForm />
  </section>
);
export default SliderDemoSection;
