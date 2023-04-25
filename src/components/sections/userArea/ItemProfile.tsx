import Image from 'next/image';
import SubHeader from '../items/SubHeader';

interface ItemProfileProps {
  header: string;
  src: string;
  title?: string;
  text: string;
  textLink: string;
}
const ItemProfile: React.FC<ItemProfileProps> = ({ header, src, title, text, textLink }) => (
  <article className="bg-lightgray p-10 rounded-md shadow-profile text-center mb-5 lg:mb-0 last:mb-0">
    <SubHeader className="text-left hidden lg:block uppercase">{header}</SubHeader>
    <div className="flex flex-col justify-between items-center lg:min-h-[442px]">
      <div className="max-w-[265px] m-auto mt-0">
        <Image alt="miEureca" width={170} height={170} src={src} className="m-auto lg:mt-10" />
        <div className="mt-5 flex flex-col justify-center">
          {title && (
            <h5 className="uppercase text-primary font-medium tracking-[.8px]">
              {title}
            </h5>
          )}
          <p className="text-gray-400 text-sm tracking-[1px]">
            {text}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center border-2 border-primary rounded-full uppercase text-primary hover:text-white hover:bg-primary transition-all duration-150 text-1xs font-semibold px-4 h-9 mt-10"
      >
        {textLink}
      </button>
    </div>
  </article>
);
export default ItemProfile;
