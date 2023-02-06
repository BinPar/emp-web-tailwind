import BaseText from './BaseText';
import CurrentPrice from './CurrentPrice';
import InfoWrap from './InfoWrap';
import NewItemBadge from './NewItemBadge';
import NormalLink from './NormalLink';
import OldPrice from './OldPrice';
import Price from './Price';
import TinyText from './TinyText';
import TypeLink from './TypeLink';

interface InfoGroupProps {
  title: string;
  author: string;
  type: string;
  initial: string;
  fullText: string;
  oldPrice: string;
  currentPrice: string;
}
const InfoGroup: React.FC<InfoGroupProps> = ({
  title,
  author,
  type,
  initial,
  fullText,
  oldPrice,
  currentPrice,
}) => (
  <div className="pt-1 w-full flex flex-col h-full lg:items-center ml-4 lg:ml-0">
    <div className="flex items-center gap-2 justify-center lg:my-3 relative">
      <TypeLink href="#" className="hidden lg:inline">
        {type}
      </TypeLink>
      {initial === '' ? null : (
        <NewItemBadge
          className="hidden lg:block absolute left-[calc(100%_+_5px);]"
          initials={initial}
          fullText={fullText}
        />
      )}
    </div>
    <NormalLink
      href="#"
      className="mb-2 lg:my-3 flex-col h-full justify-center !flex xl:min-h-[53px]"
    >
      <BaseText className="line-clamp-3 max-w-[250px]">{title}</BaseText>
    </NormalLink>
    <div className="flex h-full justify-end flex-col w-full">
      <div className="min-h-[37px] max-h-[37px] line-clamp-2 ">
        <TinyText>
          <NormalLink href="#" className="block hover:text-primary">
            {author}
          </NormalLink>
        </TinyText>
      </div>

      <InfoWrap>
        <Price className="mt-0 relative lg:justify-center">
          {oldPrice === '' ? null : <OldPrice>{oldPrice}</OldPrice>}
          <CurrentPrice>{currentPrice}</CurrentPrice>
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
);

export default InfoGroup;
