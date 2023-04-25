/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect } from 'react';
import type { WithClassName } from '../../model/react';
import { RealData } from '../../utils/dataInfoTest/modelTemp';

import Carousel from './items/Carousel';
import CarouselItem from './items/CarouselItem';
import ImageGroup from './items/ImageGroup';
import InfoGroup from './items/InfoGroup';

interface CarouselListProps {
  data: RealData[];
}

const CarouselList: React.FC<CarouselListProps> = ({
  data,
}) => {
  const [itemCarousel, setItemCarousel] = useState<React.ReactNode>();
  useEffect(() => {
    setItemCarousel(
      data.map(
        ({ src, title, author, type, type2, initial, fullText, oldPrice, currentPrice }, i) => (
          <CarouselItem key={`${i}`}>
            <ImageGroup src={src} type={type} />
            <InfoGroup
              className="h-[auto] lg:h-[calc(100%_-_178px)] items-start lg:items-center text-left lg:text-center"
              title={title}
              author={author}
              type={type}
              type2={type2}
              initial={initial}
              fullText={fullText}
              oldPrice={oldPrice}
              currentPrice={currentPrice}
            />
          </CarouselItem>
        ),
      ),
    );
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <Carousel>{itemCarousel}</Carousel>
  );
};

export default CarouselList;
