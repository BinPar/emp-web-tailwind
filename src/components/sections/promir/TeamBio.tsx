import { Dispatch, SetStateAction } from 'react';
import type { WithChildren } from '../../../model/react';
import Image from 'next/image';
import Close from '../../icons/Close';

interface TeamBioProps {
  src: string;
  name: string;
  specialty: string;
  place: string;
  closeMethod: Dispatch<SetStateAction<string>>;
}

const TeamBio: React.FC<WithChildren<TeamBioProps>> = ({
  src,
  name,
  specialty,
  place,
  children,
  closeMethod,
}) => (
  <div
    className="fixed bg-[#0089a9e6] h-screen w-full z-40 top-0"
    onClick={(): void => closeMethod('')}
  >
    <div className="relative max-w-[calc(100%_-_40px)] lg:max-w-[1056px] h-[calc(100%_-_80px)] m-auto">
      <div className="w-full px-5 max-w-[1024px] h-full bg-white relative top-10 before:content-trianglesRight before:absolute before:top-0 before:opacity-50 before:right-0 after:content-trianglesLeft after:opacity-50 after:absolute after:bottom-0 after:left-0 flex justify-center items-center">
        <div>
          <div className="flex flex-col items-center md:flex-row gap-5 md:items-end mb-10">
            <Image alt="team Image" width={200} height={200} src={'/img/' + src} />
            <div className="text-center md:text-left">
              <h4 className="text-xl text-secondarygray font-light tracking-[1px] mb-2">{name}</h4>
              <h5 className="text-2.5xs font-light text-gray-400 tracking-[1px] mb-2">
                {specialty}
              </h5>
              <h6 className="text-2.5xs font-semibold text-gray-500 tracking-[1px] mb-2">
                {place}
              </h6>
            </div>
          </div>
          <ul className="max-w-[650px] list-disc border-t md:border-t-0 md:border-l border-gray-400 pb-5 px-5 xs:px-20 md:px-0 pt-10 md:pt-5 md:pl-10 text-gray-400">
            {children}
          </ul>
        </div>
      </div>
      <Close className="w-11 lg:w-8 text-promirDark z-50 lg:text-white absolute top-20 lg:top-10 right-8 lg:-right-2 hover:scale-150 cursor-pointer transition-all duration-150" />
    </div>
  </div>
);
export default TeamBio;
