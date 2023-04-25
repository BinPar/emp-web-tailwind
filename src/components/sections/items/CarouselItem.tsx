import { forwardRef } from 'react';
import { WithChildren } from '../../../model/react';

type CarouselItemProps = WithChildren<{
  // eslint-disable-next-line react/require-default-props
  index?: number;
}>;

const CarouselItem: React.FC<CarouselItemProps> = forwardRef<HTMLElement, CarouselItemProps>(
  ({ index, children }, ref) => (
    <article
      ref={ref}
      className="pb-7 flex lg:flex-col snap-start basis-[100%] md:basis-[49%] lg:basis-[24%] xl:basis-[18.6%] first:ml-0 shrink-0 grow text-center"
      data-index={index}
    >
      {children}
    </article>
  ),
);

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
