import ButtonPromir from './ButtonPromir';

interface TeamItemProps {
  src: string;
  name: string;
  specialty: string;
  place: string;
}

const TeamItem: React.FC<TeamItemProps> = ({ src, name, specialty, place }) => (
  <div className='max-w-[600px] text-center'>
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
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
    <ButtonPromir className="min-w-[100px]">BIO</ButtonPromir>
  </div>
);
export default TeamItem;
