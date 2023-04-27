import Head from 'next/head';
import MainLayout from '../src/components/sections/MainLayout';
import ProfileDesktopLayout from '../src/components/sections/userArea/ProfileDesktopLayout';
import ProfileMobileLayout from '../src/components/sections/userArea/ProfileMobileLayout';

const Profile: React.FC = () => (
  <>
    <Head>
      <title>Ejemplo de página de EMP en TW</title>
      <meta name="description" content="Ejemplo de página de EMP en TW" />
      <meta property="og:image" content="/assets/rocketLaptop.png" />
    </Head>
    <MainLayout>
      <ProfileDesktopLayout/>
      <ProfileMobileLayout/>
    </MainLayout>
  </>
);
export default Profile;
