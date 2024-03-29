import Image from 'next/image';
import DivWrapper from '../items/DivWrapper';
import SubHeader from '../items/SubHeader';
import MyProfileLi from './MyProfileLi';
import InputForms from '../checkOut/InputForms';
import Statistics from '../../icons/Statistics';
import AdminLink from './AdminLink';
import Calendar from '../../icons/Calendar';
import Docs from '../../icons/Docs';
import Mail from '../../icons/Mail';
import ActionButton from './ActionButton';
import ItemPurchase from './ItemPurchase';
import ItemSubscription from './ItemSubscription';
import ItemNotCourse from './ItemNotCourse';
import ItemMyCourse from './ItemMyCourse';
import { useState } from 'react';

const SectionMyProfile: React.FC = () => {
  const cursos = true;
  return (
    <>
      <section className="my-10">
        <DivWrapper>
          <div className="flex gap-7 mb-20">
            <article className="w-2/5">
              <SubHeader className="flex justify-between items-center">
                MIS DATOS
                <ActionButton text="editar" />
              </SubHeader>
              <ul>
                <MyProfileLi label="Nombre" value="Adrian" />
                <MyProfileLi label="Apellidos" value="Binpar" />
                <MyProfileLi label="Email" value="adrian@binpar.com" />
                <MyProfileLi label="Perfil" value="Público general" />
                <MyProfileLi label="Grado" value="Público general" />
              </ul>
            </article>
            <article className="w-full">
              <SubHeader className="flex justify-between items-center">
                MIS COMPRAS
                <ActionButton text="ver todas" />
              </SubHeader>
              <div className="flex">
                <ItemPurchase
                  id="ES23036420"
                  state="ACEPTADO"
                  date="11/11/2022"
                  amount="1 producto"
                  total="30 días gratuitos (después 24,90 €)"
                />
                <ItemPurchase
                  id="ES23085322"
                  state="ACEPTADO"
                  date="20/02/2023"
                  amount="1 producto"
                  total="30 días gratuitos (después 24,90 €)"
                />
              </div>
              <SubHeader className="flex justify-between items-center mt-8">
                MIS SUSCRIPCIONES
                <ActionButton text="ver todas" />
              </SubHeader>
              <ItemSubscription
                src="/img/subscription1.jpg"
                title="Mi Eureka - Biblioteca de Terapia Ocupacional para estudiantes"
                plan="Mensual"
              />
              <ItemSubscription
                src="/img/subscription2.jpg"
                title="Mi Eureka - Biblioteca de Medicina Familiar y Comunitaria"
                plan="Mensual"
              />
              <ItemSubscription
                src="/img/subscription1.jpg"
                title="Mi Eureka - Biblioteca de Terapia Ocupacional para estudiantes"
                plan="Mensual"
              />
              <ItemSubscription
                src="/img/subscription2.jpg"
                title="Mi Eureka - Biblioteca de Medicina Familiar y Comunitaria"
                plan="Mensual"
              />
              <ItemSubscription
                src="/img/subscription1.jpg"
                title="Mi Eureka - Biblioteca de Terapia Ocupacional para estudiantes"
                plan="Mensual"
              />
            </article>
          </div>
          <article>
            <SubHeader className="flex justify-between items-center">
              MIS CURSOS
              <ActionButton text="ver todos" />
            </SubHeader>
            <div className="grid grid-cols-1 gap-3 md:gap-5 lg:gap-10 md:grid-cols-2">
              {!cursos ? (
                <ItemNotCourse />
              ) : (
                <ItemMyCourse
                  src="/img/master.jpg"
                  title="Máster en Enfermería de Urgencias y Emergencias de la SEMES"
                  author="Autores de la obra:  SEMES - Sociedad Española de Medicina de Urgencias y Emergencias, Javier Morillo Rodriguez, Concepción Abellas Álvarez, Carmen Casal Angulo"
                  type="Máster de Formación Permanente"
                />
              )}
            </div>
          </article>
        </DivWrapper>
      </section>
      <section className="bg-lightgray py-10">
        <DivWrapper>
          <SubHeader>MI EUREKA</SubHeader>
          <div className="flex justify-around items-center">
            <Image alt="miEureca" width={170} height={170} src="/img/mie.png" className="mt-0" />
            <div className="text-center">
              <Image
                src="/img/mieCollections.jpg"
                alt="collection group"
                width={802}
                height={78.4}
                className="m-auto mb-6"
              />
              <button
                type="button"
                className="pointer-events-none opacity-50 h-10 border-2 border-primary text-1xs uppercase tracking-[1px] bg-primary text-white transition-all duration-150 px-4"
              >
                próximamente
              </button>
            </div>
          </div>
        </DivWrapper>
      </section>
      <section className="py-10">
        <DivWrapper>
          <SubHeader className="flex justify-between items-center">
            MIS CÓDIGOS
            <ActionButton text="ver todos" />
          </SubHeader>
          <p className="uppercase text-center text-primary font-semibold tracking-[.8px] mb-7">
            canjea tu código
          </p>
          <form className="flex gap-5 justify-center w-full">
            <InputForms
              type="text"
              id="code3"
              label="Código *"
              className="w-full md:w-[calc(50%_-_10px)] lg:w-[calc((100%_/_3)_-_15px)]"
            />
            <button
              type="submit"
              className="bg-primary text-white text-1xs uppercase tracking-[1px] h-10 w-24 block"
            >
              Canjear
            </button>
          </form>
        </DivWrapper>
      </section>
      <section className="bg-lightgray py-10">
        <DivWrapper>
          <SubHeader>ADMINISTRACIÓN</SubHeader>
          <div className="flex gap-5">
            <AdminLink href="#" title="Estadísticas">
              <Statistics className="w-10 group-hover:text-white" />
            </AdminLink>
            <AdminLink href="#" title="Actualizador de fechas">
              <Calendar className="w-10 group-hover:text-white" />
            </AdminLink>
            <AdminLink href="#" title="Traducciones">
              <Docs className="w-10 group-hover:text-white" />
            </AdminLink>
            <AdminLink href="#" title="Invitaciones">
              <Mail className="w-10 group-hover:text-white" />
            </AdminLink>
          </div>
        </DivWrapper>
      </section>
    </>
  );
};
export default SectionMyProfile;
