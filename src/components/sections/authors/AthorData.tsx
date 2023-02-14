import React from 'react';
import Image from 'next/image';
import AuthorInfo from './AuthorInfo';
import SubHeader from '../items/SubHeader';

interface AuthorDataProps {
  src: string;
  name: string;
}

const AuthorData: React.FC<AuthorDataProps> = ({ src, name }) => (
  <section className="lg:flex lg:items-center py-10 w-full">
    <div className="min-w-[250px] max-w-[250px] min-h-[250px] border-4 rounded-full border-primary m-auto mt-0 mb-12 lg:mb-0 lg:mr-12">
      <div className="w-full border-[6px] border-white rounded-full overflow-hidden">
        <Image src={src} alt={name} width={280} height={280} />
      </div>
    </div>
    <div className='w-full'>
      <SubHeader>{name}</SubHeader>
      <AuthorInfo />
    </div>
  </section>
);

export default AuthorData;
