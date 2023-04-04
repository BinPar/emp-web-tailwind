import CollectionLink from './CollectionLink';

const CollectionsNav: React.FC = () => (
    <ul className="flex gap-1 py-2 border-b border-gray-200 flex-col sm:flex-row">
      <CollectionLink href="#professional">Colecciones profesionales</CollectionLink>
      <CollectionLink href="#student">Colecciones para estudiantes</CollectionLink>
    </ul>
);

export default CollectionsNav;
