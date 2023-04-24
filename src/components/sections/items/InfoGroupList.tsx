import BaseText from './BaseText';
import CurrentPrice from './CurrentPrice';
import InfoWrap from './InfoWrap';
import NewItemBadge from './NewItemBadge';
import NextPost from './NextPost';
import NormalLink from './NormalLink';
import OldPrice from './OldPrice';
import Price from './Price';
import TinyText from './TinyText';
import TypeLink from './TypeLink';

interface InfoGroupListProps {
  title: string;
  info?: string;
  author: string;
  type: string;
  type2?: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}
const InfoGroupList: React.FC<InfoGroupListProps> = ({
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
      <div className="flex gap-2 lg:my-3 relative max-w-[110px]">
        {type2 ? (
          <>
            <TypeLink href="#" className="my-0 text-center leading-[8.8px] hidden lg:inline">
              {type}
            </TypeLink>
            <TypeLink href="#" className="my-0 text-center leading-[8.8px] hidden lg:inline">
              {type2}
            </TypeLink>
          </>
        ) : (
          <TypeLink href="#" className="my-0 text-center leading-[8.8px] hidden lg:inline">
            {type}
          </TypeLink>
        )}
        {initial === '' ? null : (
          <NewItemBadge
            className="hidden lg:block absolute left-[calc(100%_+_5px)] -top-2"
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
              className="block lg:hidden lg:absolute lg:left-36"
              initials={initial}
              fullText={fullText}
            />
          )}
        </Price>
      </InfoWrap>
    </div>
  </div>
);

export default InfoGroupList;
