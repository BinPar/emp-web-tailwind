import React from 'react';

import Accesibility from '../../icons/Accesibility';
import Thawte from '../../icons/Thawte';
import Trust from '../../icons/Trust';

const SecurityIconList: React.FC = () => (
  <ul className="flex flex-row lg:mt-4 lg:pt-4 lg:w-40 w-full lg:border-t-2 lg:border-[rgba(255,255,255,.3)] lg:justify-around justify-center">
    <li className="mx-2">
      <a href="#">
        <Thawte className="w-8 min-w-[20px]" />
      </a>
    </li>
    <li className="mx-2">
      <a href="#">
        <Accesibility className="w-8 min-w-[20px]" />
      </a>
    </li>
    <li className="mx-2">
      <a href="#">
        <Trust className="w-8 min-w-[20px]" />
      </a>
    </li>
  </ul>
);

export default SecurityIconList;
