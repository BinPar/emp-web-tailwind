import Head from 'next/head';

import MainLayout from '../src/components/sections/MainLayout';
import SectionHome from '../src/components/sections/userArea/SectionHome';
import InternalNavBar from '../src/components/sections/header/InternalNavBar';
import { SetStateAction, useState } from 'react';
import SectionMyProfile from '../src/components/sections/userArea/SectionMyProfile';
import SectionMyData from '../src/components/sections/userArea/SectionMyData';

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
        {currentNav === 'MyProfile' && <SectionMyProfile />}
        {currentNav === 'MyData' && <SectionMyData />}
      </MainLayout>
    </>
  );
};
export default Profile;
