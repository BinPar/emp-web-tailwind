import { forwardRef } from 'react';

interface CarouselItemProps {
  // eslint-disable-next-line react/require-default-props
  index?: number;
}

const CarouselItem: React.FC<CarouselItemProps> = forwardRef<HTMLElement, CarouselItemProps>(
  ({ index, children }, ref) => (
    <article
      ref={ref}
      className="pb-7 flex lg:flex-col px-4 snap-start basis-[100%] md:basis-[49%] lg:basis-[24%]  xl:basis-[24%] ml-[2%] lg:ml-[1.33%] first:ml-0 shrink-0 grow float-left text-center"
      data-index={index}
    >
      {children}
    </article>
  ),
);

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
