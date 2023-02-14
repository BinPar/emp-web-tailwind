import React from 'react';
import Image from 'next/image';

import InfoText from './InfoText';
import InfoListItem from './InfoListIlem';

const MethodModule: React.FC = () => (
  <>
    <div className="w-[270px] m-auto md:float-left md:mr-5 mb-5">
      <Image alt="ufv" src="/assets/imagenMetodo.jpeg" width={270} height={180} />
    </div>
    <InfoText>
      El diseño de este programa está basado en el{' '}
      <span className="font-bold text-gray-400">Aprendizaje Basado en Problemas</span>, mediante el
      cual el alumno deberá tratar de resolver las distintas situaciones de práctica profesional que
      se le planteen a lo largo del curso.
    </InfoText>
    <InfoText>
      <span className="font-bold text-gray-400">Enfoque situado y contextual</span>: con el fin de
      capacitarnos para mejorar nuestra práctica profesional, este tipo de formación se sitúa en el
      contexto donde se produce la práctica asistencial.
    </InfoText>
    <InfoText>
      La <span className="font-bold text-gray-400">propuesta pedagógica</span> del presente curso
      comprende los siguientes recursos educativos:
    </InfoText>
    <ul className="pl-9">
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          <span className="font-bold text-gray-400">Vídeos de situaciones reales:</span> a través de
          las narrativas de profesionales expertos se puede adquirir un elevado grado de comprensión
          de las situaciones problemáticas más frecuentes. Se utilizará un sistema en el cual el
          alumno podrá ver al docente explicando los contenidos y su presentación multimedia de
          forma paralela.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          <span className="font-bold text-gray-400">Casos clínicos:</span>
          el alumno deberá resolver varios casos clínicos que le obligarán a realizar una toma de
          decisiones clínicas simulando las situaciones reales. Los casos son interactivos, en
          ocasiones acompañados de imágenes clínicas y vídeos del especialista que guiarán al alumno
          en el trascurso del mismo.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          <span className="font-bold text-gray-400">Actividades:</span>
          Actividades: a efectos de maximizar el resultado pedagógico, cada tema presenta diferentes
          actividades autoevaluativas con las respuestas comentadas.
        </InfoText>
      </InfoListItem>
      <InfoListItem>
        <InfoText className="pl-2 mb-2">
          <span className="font-bold text-gray-400">Un espacio de comunicación</span>
          con el coordinador o tutor académico y con colegas inscritos en el programa.
        </InfoText>
      </InfoListItem>
    </ul>
    <InfoText>
      Al finalizar cada módulo, se realizará una{' '}
      <span className="font-bold text-gray-400">evaluación online</span> con preguntas de respuesta
      múltiple con el objetivo de evaluar la adquisición de los conocimientos presentados y la
      capacidad de utilizarlos en la práctica diaria.
    </InfoText>
    <InfoText className='mb-0'>
      Cada participante podrá organizar su tiempo y ritmo de aprendizaje adaptándolo a sus horarios.
      Nuestro sistema le permitirá acceder a los contenidos desde cualquier dispositivo con conexión
      a internet (ordenador, tablet, smartphone) y en cualquier momento.
    </InfoText>
  </>
);

export default MethodModule;
