/* eslint-disable max-len */
import React, { useState } from 'react';

import SubHeader from '../items/SubHeader';
import List from '../../icons/List';
import Items from '../../icons/Items';
import Section from '../Section';
import ItemsList from '../ItemsList';
import ItemsListView from '../items/ItemsListView';

import data from '../../../utils/dataInfoTest/publicationInfo';
import DivWrapper from '../items/DivWrapper';

const AuthorPublications: React.FC = () => {
  const [switchItems, setSwitchItems] = useState<boolean>(false);
  return (
    <section className="py-10 bg-lightgray">
      <DivWrapper>
        <SubHeader className="flex items-center justify-between">
          PUBLICACIONES Y FORMACIÓN
          <div className="hidden lg:gap-5 lg:flex">
            <button type="button" onClick={(): void => setSwitchItems(!switchItems)}>
              <List className={`w-5${switchItems ? ' text-primary' : ''}`} />
            </button>
            <button type="button" onClick={(): void => setSwitchItems(!switchItems)}>
              <Items className={`w-5${!switchItems ? ' text-primary' : ''}`} />
            </button>
          </div>
        </SubHeader>

        <article className={`${switchItems ? 'lg:pb-7' : ''}`}>
          {!switchItems ? (
            <ItemsList
              data={data}
              className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl2:grid-cols-5 gap-5 md:gap-10 xl2:gap-16"
            />
          ) : (
            <ItemsListView
              data={data}
              itemClassName=" lg:border-b lg:border-secondary lg:pb-7"
              className=" grid-cols-1 gap-7 lg:gap-10"
            />
          )}
        </article>
      </DivWrapper>
    </section>
  );
};

export default AuthorPublications;
