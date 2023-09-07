import ItemAcordeon from '../items/ItemAcordeon';
import DescriptionModule from '../items/DescriptionModule';
import AddressedModule from '../items/AddressedModule';
import InfoText from '../items/InfoText';
import CollectionIncludedList from './CollectionIncludedList';

const CollectionInfoAcordeon: React.FC = () => (
  <>
    <ItemAcordeon id="description" title="Descripción">
      <InfoText>
        La colección <span className="font-bold">Mi Eureka Biblioteca de Anestesia</span> ofrece
        acceso a todo el contenido de Editorial Médica Panamericana en el campo de la{' '}
        <span className="font-bold">Anestesiología.</span>
      </InfoText>
      <InfoText>
        Una colección de más de 35 obras en formato digital que facilita la consulta y el apoyo a la
        toma de decisión clínica de los médicos especialistas y residentes de Anestesiología. Desde
        cada obra se podrá acceder directamente a todos sus recursos multimedia y materiales
        complementarios (imágenes, vídeos, casos clínicos, etc.), con una excelente experiencia de
        uso.
      </InfoText>
      <InfoText>
        Todo el contenido será accesible tanto de manera online (web y aplicación desktop), como{' '}
        <span className="font-bold">de manera offline gracias a las versiones móviles</span> (iOS y
        Android), con la posibilidad de descarga del contenido que ofrecen.
      </InfoText>
      <InfoText>
        Una herramienta de gran ayuda para los médicos especialistas y residentes de Anestesiología,
        al permitirles resolver sus dudas clínicas gracias a la búsqueda cruzada de Mi Eureka, que
        consulta en la biblioteca completa de contenidos y ofrece las mejores respuestas,
        permitiendo acceder ágilmente a la información requerida en cualquier momento.
      </InfoText>
      <InfoText>
        Disponible a través de un modelo de suscripción muy accesible y asequible,{' '}
        <span className="font-bold">Mi Eureka Biblioteca de Anestesia</span> se actualizará
        regularmente con todas las nuevas publicaciones de la Editorial en esta área, así como con
        las últimas ediciones de las obras ya incluidas.
      </InfoText>
      <InfoText>
        Todos los contenidos de Anestesiología de Editorial Médica Panamericana accesibles en
        cualquier momento a golpe de clic y desde la palma de la mano. Con Mi Eureka ya no hay
        barreras para acceder al conocimiento como, cuando y donde sea necesario.
      </InfoText>
    </ItemAcordeon>
    <ItemAcordeon id="addressed" title="Dirigido a">
      <InfoText>Profesionales de Anestesia</InfoText>
    </ItemAcordeon>
    <ItemAcordeon title='Obras incluidas' id='included'>
      <CollectionIncludedList/>
    </ItemAcordeon>
  </>
);
export default CollectionInfoAcordeon;
