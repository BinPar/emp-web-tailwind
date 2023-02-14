import React from 'react';
import Image from 'next/image';
import AuthorInfo from './AuthorInfo';
import SubHeader from '../items/SubHeader';
import DivWrapper from '../items/DivWrapper';

interface AuthorDataProps {
  src: string;
  name: string;
}

const AuthorData: React.FC<AuthorDataProps> = ({ src, name }) => (
  <section className="py-10 w-full">
    <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] lg:flex lg:items-center">
      <div className="min-w-[250px] max-w-[250px] min-h-[250px] border-4 rounded-full border-primary m-auto mt-0 mb-12 lg:mb-0 lg:mr-12">
        <div className="w-full border-[6px] border-white rounded-full overflow-hidden">
          <Image src={src} alt={name} width={280} height={280} />
        </div>
      </div>
      <div className="w-full">
        <SubHeader>{name}</SubHeader>
        <AuthorInfo />
      </div>
    </DivWrapper>
  </section>
);

export default AuthorData;
