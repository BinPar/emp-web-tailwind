import DivWrapper from '../items/DivWrapper';
import CollectionLink from './CollectionLink';

const CollectionsNav: React.FC = () => (
  <DivWrapper className="w-[calc(100%_-_50px)] lg:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)]">
    <ul className="flex gap-1 py-2 border-b border-gray-200 flex-col sm:flex-row">
      <CollectionLink href="#professional">Colecciones profesionales</CollectionLink>
      <CollectionLink href="#student">Colecciones para estudiantes</CollectionLink>
    </ul>
  </DivWrapper>
);

export default CollectionsNav;
