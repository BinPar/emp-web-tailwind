import { FilterRealData } from './filterModelTemp';

export const allSpecialtyMap = new Map<string, FilterRealData[]>([
  [
    'Estudiante y Docente',
    [
      { data: 'Biología', value: 'estudiante-y-docente-biologia', drop: true
   },
      { data: 'Bioquímica', value: 'estudiante-y-docente-biquimica' },
      { data: 'Educación', value: 'estudiante-y-docente-educacion', drop: true },
      { data: 'Enfermería', value: 'estudiante-y-docente-enfermeria', drop: true },
      { data: 'Farmacia', value: 'estudiante-y-docente-farmacia' },
      { data: 'Fisioterapia', value: 'estudiante-y-docente-fisioterapia', drop: true },
      { data: 'Logopedia', value: 'estudiante-y-docente-logopedia' },
      { data: 'Odontología', value: 'estudiante-y-docente-odontologia' },
      { data: 'Podología', value: 'estudiante-y-docente-podologia' },
      { data: 'Psicología', value: 'estudiante-y-docente-psicologia', drop: true },
      { data: 'Química', value: 'estudiante-y-docente-quimica', drop: true },
      { data: 'Veterinaria', value: 'estudiante-y-docente-veterinaria' },
    ],
  ],
  [
    'Profesionales',
    [
      { data: 'Biólogo/a', value: 'profesional-biologo-a' },
      { data: 'Bioquímico/a', value: 'profesional-bioquimico-a' },
      { data: 'Enfermero/a', value: 'profesional-enfermero-a' },
      { data: 'Farmaceutico/a', value: 'profesional-farmaceutico-a', drop: true },
      { data: 'Fisio', value: 'profesional-fisio', drop: true },
      { data: 'Logopeda', value: 'profesional-logopeda', drop: true },
      { data: 'Odontologo/a', value: 'profesional-odontologo-a' },
      { data: 'Podologo/a', value: 'profesional-podologo-a' },
      { data: 'Psicologo/a', value: 'profesional-psicologo-a' },
      { data: 'Quimico/a', value: 'profesional-quimico-a' },
      { data: 'Veterinario/a', value: 'profesional-veterinario-a' },
    ],
  ],
]);
export const keySpecialtyFilter = [
  'Estudiante y Docente',
  'Profesionales',
  ];
 