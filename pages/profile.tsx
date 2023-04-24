import Head from 'next/head';
import Image from 'next/image';

import MainLayout from '../src/components/sections/MainLayout';
import SubHeader from '../src/components/sections/items/SubHeader';
import ItemProfile from '../src/components/sections/userArea/ItemProfile';
import SectionHome from '../src/components/sections/userArea/SectionHome';

const Profile: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <MainLayout>
      <SectionHome/>
    </MainLayout>
  </>
);
export default Profile;
