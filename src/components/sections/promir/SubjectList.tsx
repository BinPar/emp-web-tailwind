import DivWrapper from '../items/DivWrapper'
import SubjectLi from './SubjectLi'

const SubjectList: React.FC = () => (
    <DivWrapper>
    <h3 className="w-full my-5 uppercase text-gray-500 font-light text-2sm pb-3 border-b border-gray-300 tracking-[1px]">
      COORDINADORES DE ASIGNATURAS
    </h3>
    <ul className="xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
      <SubjectLi
        title="Alergología"
        name1="Belén de la Hoz Caballer"
        name2="David González Olano"
      />
      <SubjectLi
        title="Anestesia y Reanimación"
        name1="Javier Moya Moradas"
        name2="Óscar Ordónez Recio"
      />
      <SubjectLi title="Cardiología" name1="Miguel Castillo Orive" />
      <SubjectLi title="Cuidados Paliativos; Geriatría" name1="Lourdes Rexach Cano" />
      <SubjectLi title="Dermatología" name1="Luis Alfonso Pérez González" />
      <SubjectLi
        title="Endocrinología y Nutrición"
        name1="Andrés Ortiz Flores"
        name2="Elisa Santacruz Cerdá"
      />
      <SubjectLi title="Enfermedades Infecciosas" name1="Pilar Martín Dávila" />
      <SubjectLi
        title="Epidemiología; Estadística; Planificación y Gestión S."
        name1="Ana Royuela Vicente"
        className='md:break-after-column lg:break-after-auto'
      />
      <SubjectLi title="Gastroenterología" name1="avier Martínez González" />
      <SubjectLi
        className="xl:break-after-column"
        title="Hematología"
        name1="José Valentín García Gutiérrez"
        name2="María Concepción Tenorio Núñez"
      />
      <SubjectLi title="Inmunología; Genética" name1="Ana García-Soidán González" />
      <SubjectLi title="Medicina Legal" className='xs:break-after-column md:break-after-auto' name1="Cristina López de la Torre" />
      <SubjectLi title="Nefrología" name1="Víctor Burguera Vion" />
      <SubjectLi title="Neumología" name1="Ignacio Boira Enrique" />
      <SubjectLi title="Neurología" name1="Rodrigo Álvarez Velasco" />
      <SubjectLi title="Oftalmología" name1="Víctor Aguado Casanova" />
      <SubjectLi title="Oncología Médica" name1="Federico Longo Muñoz" />
      <SubjectLi title="Otorrinolaringología" name1="Raúl del Castillo López" />
      <SubjectLi
        title="Pediatría"
        name1="Raquel Buenache Espartosa"
        className="lg:break-after-column xl:break-after-auto"
      />
      <SubjectLi title="Psiquiatría" name1="Irene Sánchez Rivero" />
      <SubjectLi
        className="xl:break-after-column"
        title="Radiología y Urgencias; Farmacología"
        name1="Jesús Corres González"
      />
      <SubjectLi title="Reumatología" name1="Carlos de la Puente Bujidos" />
      <SubjectLi title="Traumatología" name1="Ignacio Cebreiro Martínez-Val" />
      <SubjectLi title="Urología" name1="Sara Álvarez Rodríguez" name2="Javier Lorca Álvaro" />
    </ul>
  </DivWrapper>

) 
export default SubjectList