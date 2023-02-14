import React from 'react';
import AuthorItem from '../authors/AuthorItem';

import InfoText from './InfoText';


const AuthorsModule: React.FC = () => (
  <>
      <InfoText className="font-bold border-b pb-2 text-gray-400">Directores</InfoText>
      <AuthorItem />
  </>
);

export default AuthorsModule;
