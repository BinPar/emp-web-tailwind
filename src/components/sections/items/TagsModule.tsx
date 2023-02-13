import React from 'react';
import InfoListItem from './InfoListIlem';

import InfoText from './InfoText';
import TagsItem from './TagsItem';

const TagsModule: React.FC = () => (
  <>
    <InfoText className="font-bold border-b pb-2 text-gray-400">Profesional</InfoText>
    <ul className="pl-9">
      <InfoListItem>
        <a href="#" className="text-xs tracking-[1px] text-gray-400 hover:text-primary">
          Médico/a
        </a>
        <ul className="pl-5 list-disc li">
          <TagsItem link="#">Anestesiología y reanimación</TagsItem>
          <TagsItem link="#">Rehabilitación y medicina física</TagsItem>
          <TagsItem link="#">Reumatología</TagsItem>
          <TagsItem link="#">Medicina del trabajo</TagsItem>
          <TagsItem link="#">Radiología-diagnóstico por imagen</TagsItem>
          <TagsItem link="#">Medicina del deporte</TagsItem>
          <TagsItem link="#">Medicina familiar y comunitaria</TagsItem>
          <TagsItem link="#">Ortopedia y traumatología</TagsItem>
        </ul>
      </InfoListItem>
      <InfoListItem>
        <a href="#" className="text-xs tracking-[1px] text-gray-400 hover:text-primary">
          Fisioterapeuta
        </a>
        <ul className="pl-5 list-disc li">
          <TagsItem link="#">Anestesiología y reanimación</TagsItem>
        </ul>
      </InfoListItem>
    </ul>
  </>
);

export default TagsModule;
