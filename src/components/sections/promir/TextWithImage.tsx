import type { WithChildren } from '../../../model/react';
import Image from 'next/image';
import SubHeader from '../items/SubHeader';

interface TextWithImageProps {
  title: string;
  src: string;
  alt: string;
  alignRight?: boolean;
}
const TextWithImage: React.FC<WithChildren<TextWithImageProps>> = ({
  children,
  title,
  src,
  alt,
  alignRight,
}) => (
  <article className="flex flex-col lg:flex-row lg:max-h-[400px] items-center overflow-hidden">
    {!alignRight && (
      <div className="w-full lg:w-2/4 overflow-hidden max-h-[300px] lg:max-h-[none]">
        <Image
          alt={alt}
          width="947"
          height="400"
          src={`/img/${src}`}
        />
      </div>
    )}
    <div className={`lg:w-2/4 py-10 px-8 lg:px-14${alignRight && ' order-2 lg:order-1'}`}>
      <SubHeader className='text-center lg:text-left'>{title}</SubHeader>
      {children}
    </div>
    {alignRight && (
      <div className="w-full lg:w-2/4 order-1 lg:order-2 overflow-hidden max-h-[300px] lg:max-h-[none]">
        <Image
          className="object-cover w-full"
          alt={alt}
          width="947"
          height="400"
          src={`/img/${src}`}
        />
      </div>
    )}
  </article>
);
export default TextWithImage;
