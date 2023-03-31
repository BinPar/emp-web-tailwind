import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import AddressOptionsItem from './AdressOptionsItem';

const AddressOptions: React.FC<WithClassName> = ({ className }) => (
  <form className={twMerge('flex flex-wrap gap-5 mb-10', className)}>
    <AddressOptionsItem option="address1" value="C/ prueba de calle 1" alias="Mi casa" />
    <AddressOptionsItem option="address2" value="C/ prueba de calle 2" alias="2nd Address" />
    <AddressOptionsItem option="address3" value="C/ prueba de calle 3" alias="3th Address" />
  </form>
);

export default AddressOptions;
