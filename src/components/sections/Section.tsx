import { twMerge } from 'tailwind-merge';
import { WithChildren, WithClassName } from '../../model/react';
import DivWrapper from './items/DivWrapper';

interface SectionProps {
  id?: string;
  secondClassName?: string;
}

const Section: React.FC<WithClassName<WithChildren<SectionProps>>> = ({
  children,
  className,
  id,
  secondClassName,
}) => (
  <section className={twMerge('py-10', className)} id={id}>
    <DivWrapper className={secondClassName}>{children}</DivWrapper>
  </section>
);

export default Section;
