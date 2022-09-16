import React, {ReactNode} from 'react';

import {AuthProvider} from './auth';
import {ItemProvider} from './item';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps) {
  return (
    <AuthProvider>
      <ItemProvider>{children}</ItemProvider>
    </AuthProvider>
  );
}

export {AppProvider};
