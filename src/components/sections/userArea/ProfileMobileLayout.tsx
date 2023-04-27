import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import DropDownItem from './DropDownItem';
import SectionHome from './SectionHome';
import SectionMyData from './SectionMyData';
import { useState } from 'react';
import SectionMyPurchase from './SectionMyPurchase';
import SectionMyCourse from './SectionMyCourse';
import SectionMySubscription from './SectionMySubscription';
import SectionMyCodes from './SectionMyCodes';
import SectionMyContent from './SectionMyContent';

const ProfileMobileLayout: React.FC<WithClassName> = ({ className }) => {
  const [currentItem, SetCurrentItem] = useState('MyHome');
  return (
    <ul className={twMerge('lg:hidden', className)}>
      <DropDownItem title="home" id="MyHome" currentValue={currentItem} method={SetCurrentItem}>
        <SectionHome />
      </DropDownItem>
      <DropDownItem
        title="Mis datos"
        id="MyData"
        currentValue={currentItem}
        method={SetCurrentItem}
      >
        <SectionMyData />
      </DropDownItem>
      <DropDownItem
        title="Mis compras"
        id="MyPurchase"
        currentValue={currentItem}
        method={SetCurrentItem}
      >
        <SectionMyPurchase />
      </DropDownItem>
      <DropDownItem
        title="Mis formación"
        id="MyCourse"
        currentValue={currentItem}
        method={SetCurrentItem}
      >
        <SectionMyCourse />
      </DropDownItem>
      <DropDownItem
        title="Mis suscripciones"
        id="MySubscriptions"
        currentValue={currentItem}
        method={SetCurrentItem}
      >
        <SectionMySubscription />
      </DropDownItem>
      <DropDownItem
        title="Mis códigos"
        id="MyCodes"
        currentValue={currentItem}
        method={SetCurrentItem}
      >
        <SectionMyCodes />
      </DropDownItem>
      <DropDownItem
        title="Mis contenidos"
        id="MyContent"
        currentValue={currentItem}
        method={SetCurrentItem}
      >
        <SectionMyContent />
      </DropDownItem>
    </ul>
  );
};
export default ProfileMobileLayout;
