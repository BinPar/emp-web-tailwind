import Image from 'next/image';
const CollectionDemoInfo: React.FC = () => (
  <ul className="border-y-2 border-y-primary py-2 grid gap-y-3 grid-cols-[1fr,_1fr] xs2:grid-cols-[1fr,_1fr,_1fr,_1fr] lg:grid-cols-[1fr,_1fr,] xl1:grid-cols-[1fr,_1fr,_1fr,_1fr] mt-5">
    <li>
      <div className="max-w-[172px] m-auto flex gap-2 items-center justify-start xs2:justify-center lg:justify-start xl1:justify-center">
        <Image src="/img/regalo.png" width={40} height={40} alt="present" />
        <p className="text-primary text-2.5xs tracking-[.5px] font-semibold uppercase leading-3">
          30 días
          <br className="hidden xs2:block lg:hidden xl1:block" /> gratuitos
        </p>
      </div>
    </li>
    <li>
      <div className="max-w-[172px] m-auto flex gap-2 items-center justify-start xs2:justify-center lg:justify-start xl1:justify-center">
        <Image src="/img/biblioteca.png" width={40} height={40} alt="library" />
        <p className="text-primary text-2.5xs tracking-[.5px] font-semibold uppercase leading-3">
          biblioteca
          <br className="hidden xs2:block lg:hidden xl1:block" /> infinita
        </p>
      </div>
    </li>
    <li>
      <div className="max-w-[172px] m-auto flex gap-2 items-center justify-start xs2:justify-center lg:justify-start xl1:justify-center">
        <Image src="/img/responsive.png" width={40} height={40} alt="responsive" />
        <p className="text-primary text-2.5xs tracking-[.5px] font-semibold uppercase leading-3">
          donde
          <br className="hidden xs2:block lg:hidden xl1:block" /> quieras
        </p>
      </div>
    </li>
    <li>
      <div className="max-w-[172px] m-auto flex gap-2 items-center justify-start xs2:justify-center lg:justify-start xl1:justify-center">
        <Image src="/img/check.png" width={40} height={40} alt="validation" />
        <p className="text-primary text-2.5xs tracking-[.5px] font-semibold uppercase leading-3">
          sin
          <br className="hidden xs2:block lg:hidden xl1:block" /> compromiso
        </p>
      </div>
    </li>
  </ul>
);
export default CollectionDemoInfo;
