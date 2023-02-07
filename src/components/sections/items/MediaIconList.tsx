import React from 'react';
import FaceBook from '../../icons/FaceBook';
import Linkeding from '../../icons/Linkeding';
import Twitter from '../../icons/twitter';
import Youtube from '../../icons/Youtube';

const MediaIconList: React.FC = () => (
  <ul className="flex flex-row justify-center">
    <li className="mx-2">
      <a href="#">
        <Twitter className="w-5 min-w-[20px]" />
      </a>
    </li>
    <li className="mx-2">
      <a href="#">
        <FaceBook className="w-5 min-w-[20px]" />
      </a>
    </li>
    <li className="mx-2">
      <a href="#">
        <Youtube className="w-5 min-w-[20px]" />
      </a>
    </li>
    <li className="mx-3">
      <a href="#">
        <Linkeding className="w-5 min-w-[20px]" />
      </a>
    </li>
  </ul>
);

export default MediaIconList;
