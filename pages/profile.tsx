import Head from 'next/head';
import Image from 'next/image';

import MainLayout from '../src/components/sections/MainLayout';
import SubHeader from '../src/components/sections/items/SubHeader';
import ItemProfile from '../src/components/sections/userArea/ItemProfile';
import SectionHome from '../src/components/sections/userArea/SectionHome';
import InternalNavBar from '../src/components/sections/header/InternalNavBar';
import { SetStateAction, useState } from 'react';
import SectionMyProfile from '../src/components/sections/userArea/SectionMyProfile';

const Profile: React.FC = () => {
  const [currentNav, SetCurrentNav] = useState('');
  return (
    <>
      <Head>
        <title>Ejemplo de página de EMP en TW</title>
        <meta name="description" content="Ejemplo de página de EMP en TW" />
        <meta property="og:image" content="/assets/rocketLaptop.png" />
      </Head>
      <MainLayout>
        <InternalNavBar method={SetCurrentNav} value={currentNav} />
        {(currentNav === '' || currentNav === 'home') && <SectionHome />}
        {currentNav === 'hola' && <SectionMyProfile />}
      </MainLayout>
    </>
  );
};
export default Profile;
