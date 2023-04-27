import { useState } from 'react';

import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';

import SectionMyContent from './SectionMyContent';
import SectionMyCodes from './SectionMyCodes';
import SectionMySubscription from './SectionMySubscription';
import SectionMyCourse from './SectionMyCourse';
import SectionMyPurchase from './SectionMyPurchase';
import SectionMyData from './SectionMyData';
import SectionMyProfile from './SectionMyProfile';
import SectionHome from './SectionHome';
import InternalNavBar from '../header/InternalNavBar';


const ProfileDesktopLayout: React.FC<WithClassName> = ({className}) => {
  const [currentNav, SetCurrentNav] = useState('');
  return (
    <div className={twMerge('hidden lg:block', className)}>
      <InternalNavBar method={SetCurrentNav} value={currentNav} />
      {(currentNav === '' || currentNav === 'home') && <SectionHome />}
      {currentNav === 'MyProfile' && <SectionMyProfile />}
      {currentNav === 'MyData' && <SectionMyData />}
      {currentNav === 'MyPurchase' && <SectionMyPurchase />}
      {currentNav === 'MyCourse' && <SectionMyCourse />}
      {currentNav === 'MySubscription' && <SectionMySubscription />}
      {currentNav === 'MyCodes' && <SectionMyCodes />}
      {currentNav === 'MyContent' && <SectionMyContent />}
    </div>
  );
};
export default ProfileDesktopLayout;
