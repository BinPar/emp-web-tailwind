import React from 'react';

import InfoText from './InfoText';
import AuthorItem from './AuthorItem';

const AuthorsModule: React.FC = () => (
  <>
      <InfoText className="font-bold border-b pb-2 text-gray-400">Directores</InfoText>
      <AuthorItem />
  </>
);

export default AuthorsModule;
