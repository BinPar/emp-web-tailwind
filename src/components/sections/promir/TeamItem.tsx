import type { WithChildren, WithClassName } from '../../../model/react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { useState } from 'react';
import TeamBio from './TeamBio';


interface TeamItemProps {
  src: string;
  name: string;
  specialty: string;
  place: string;
  isVideo?: boolean;
  srcVideo?: string;
}

const TeamItem: React.FC<WithClassName<WithChildren<TeamItemProps>>> = ({ src, name, specialty, place, isVideo, children, srcVideo, className }) => {
  const [openBio, SetOpenBio] = useState('');
  return (
    <>
      <div className={twMerge('max-w-[600px] text-center', className)}>
        {isVideo ? (
          <iframe
            width="560"
            height="315"
            src={srcVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <Image className='m-auto' alt="team Image" width={300} height={300} src={'/img/' + src} />
        )}
        <div className="mt-5 mb-5">
          <h4 className="text-xl text-secondarygray font-light tracking-[1px] mb-2 text-center">
            {name}
          </h4>
          <h5 className="text-2.5xs font-light text-gray-400 tracking-[1px] mb-2 text-center">
            {specialty}
          </h5>
          <h6 className="text-2.5xs font-semibold text-gray-500 tracking-[1px] mb-2 text-center">
            {place}
          </h6>
        </div>
        <button
          onClick={(): void => SetOpenBio(name)}
          className={`min-h-[40px] border-2 border-primary px-4 hover:bg-primary hover:text-white text-primary uppercase font-medium text-1xs tracking-[1px] min-w-[100px] transition-all duration-150 ${
            !isVideo && 'bg-primary !text-white hover:brightness-75'
          }`}
        >
          BIO
        </button>
      </div>
      {openBio === name && <TeamBio closeMethod={SetOpenBio} src={src} name={name} specialty={specialty} place={place} >{children}</TeamBio>}
    </>
  );
};
export default TeamItem;
