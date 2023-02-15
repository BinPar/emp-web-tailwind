import Image from 'next/image';
import BaseText from '../items/BaseText';
import CurrentPrice from '../items/CurrentPrice';
import InfoWrap from '../items/InfoWrap';
import NewItemBadge from '../items/NewItemBadge';
import NextPost from '../items/NextPost';
import NormalLink from '../items/NormalLink';
import OldPrice from '../items/OldPrice';
import Price from '../items/Price';
import TinyText from '../items/TinyText';
import TypeLink from '../items/TypeLink';
import TypeP from '../items/TypeP';

interface ListModeProps {
  src: string;
  title: string;
  info: string;
  author: string;
  type: string;
  type2?: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}

// eslint-disable-next-line max-len
const ListMode: React.FC<ListModeProps> = ({
  src,
  title,
  info,
  author,
  type,
  type2,
  initial,
  fullText,
  oldPrice,
  currentPrice,
}) => (
  <>
    <NormalLink
      href="/productPage"
      className="min-w-[100px] w-[100px] lg:w-[180px] lg:min-w-[180px] flex m-auto items-start my-0 lg:min-h-[180px] overflow-hidden flex-col gap-2 lg:gap-0"
    >
      <Image alt="item" src={src} width="1038" height="1046" />
      {type2 === undefined ? (
        <TypeP className="lg:hidden inline m-auto my-0 text-center leading-[8.8px]">{type}</TypeP>
      ) : (
        <div className='flex gap-2'>
          <TypeP className="lg:hidden max-w-[52px] min-w-[40px] inline m-auto my-0 text-center leading-[8.8px]">
            {type}
          </TypeP>
          <TypeP className="lg:hidden max-w-[52px] min-w-[40px] inline m-auto my-0 text-center leading-[8.8px]">
            {type2}
          </TypeP>
        </div>
      )}
    </NormalLink>

    <div className="pt-1 w-full flex flex-col h-full ml-4">
      <NormalLink
        href="#"
        className="mb-2 my-3 lg:my-0 flex-col h-full justify-center flex lg:block max-h-[53px] lg:max-h-none"
      >
        <BaseText className="line-clamp-3 text-left">{title}</BaseText>
      </NormalLink>
      <div className="flex h-full justify-start text-left flex-col w-full max-w-[750px]">
        <div className="max-h-[37px] line-clamp-2 ">
          <TinyText>
            <NormalLink href="#" className="line-clamp-1 lg:block hover:text-primary">
              {author}
            </NormalLink>
          </TinyText>
        </div>
        <p className="text-gray-400 text-1xs tracking-widest font-light mt-5 mb-2 hidden lg:line-clamp-2">
          {info}
        </p>
        <div className="flex gap-2 lg:my-3 relative">
          {type2 === undefined ? (
            <TypeLink href="#" className="my-0 text-center leading-[8.8px] hidden lg:inline">
              {type}
            </TypeLink>
          ) : (
            <>
              <TypeLink href="#" className="my-0 text-center leading-[8.8px] hidden lg:inline">
                {type}
              </TypeLink>
              <TypeLink href="#" className="my-0 text-center leading-[8.8px] hidden lg:inline">
                {type2}
              </TypeLink>
            </>
          )}
          {initial === '' ? null : (
            <NewItemBadge
              className="hidden lg:block absolute left-[calc(100%_+_5px);]"
              initials={initial}
              fullText={fullText}
            />
          )}
        </div>
        <InfoWrap className="lg:border-t-0 pt-2 mt-2 lg:mt-0 lg:pt-0">
          <Price className="mt-0 relative">
            {oldPrice === '' ? null : <OldPrice>{oldPrice}</OldPrice>}
            {currentPrice !== 'prox' ? (
              <CurrentPrice>{currentPrice}</CurrentPrice>
            ) : (
              <NextPost className="text-sm">Próxima publicación</NextPost>
            )}
            {initial === '' ? null : (
              <NewItemBadge
                className="block lg:hidden absolute left-44"
                initials={initial}
                fullText={fullText}
              />
            )}
          </Price>
        </InfoWrap>
      </div>
    </div>
  </>
);

export default ListMode;
