import { twMerge } from 'tailwind-merge';
import type { WithClassName } from '../../../model/react';
import FormOptionsItem from './FormOptionsItem';

const AddressOptions: React.FC<WithClassName> = ({ className }) => (
  <form className={twMerge('flex flex-wrap gap-5 mb-10', className)}>
    <FormOptionsItem type='address' option="address1" value="C/ prueba de calle 1" alias="Mi casa" />
    <FormOptionsItem type='address' option="address2" value="C/ prueba de calle 2" alias="2nd Address" />
    <FormOptionsItem type='address' option="address3" value="C/ prueba de calle 3" alias="3th Address" />
  </form>
);

export default AddressOptions;
