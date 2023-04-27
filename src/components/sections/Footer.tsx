import React from 'react';
import Image from 'next/image';

import DivWrapper from './items/DivWrapper';
import ListLinks from './items/ListLinks';
import MediaIconList from './items/MediaIconList';
import SecurityIconList from './items/SecurityIconList';

const footer: React.FC = () => (
  <footer className="bg-primary py-5 text-white absolute bottom-0 w-full">
    <DivWrapper className="flex justify-between mb-5 items-center flex-col lg:flex-row lg:border-b-0 pb-4 lg:pb-0">
      <a href="#">
        <div className="max-w-[280px]">
          <Image
            width={608}
            height={180}
            alt="Claim Editorial Médica Panamericana"
            src="/assets/empWhite.svg"
            priority
          />
        </div>
      </a>
      <span className="border-t-2 w-full border-[rgba(255,255,255,.3)] block md:hidden my-3 md:my-4" />

      <ListLinks />
      <div className="w-full lg:w-40 flex flex-col lg:block mt-3 md:mt-10 lg:mt-0 md:border-t-0 pt-3 md:pt-0 border-t-2 border-[rgba(255,255,255,.3)]">
        <MediaIconList />
        <span className="border-t-2 border-[rgba(255,255,255,.3)] block lg:hidden my-3 md:my-4" />
        <SecurityIconList />
      </div>
    </DivWrapper>
    <DivWrapper className="text-center">
      <p className="uppercase font-extrabold opacity-50 text-3xs tracking-widest">
        © 2021 Editorial Médica Panamericana. Todos los derechos reservados
      </p>
    </DivWrapper>
  </footer>
);

export default footer;
