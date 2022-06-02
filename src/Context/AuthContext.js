import React, { createContext} from 'react';

import { useTools } from '../hooks/useTools';

const AuthContext=createContext()


const AuthProvider=({ children })=> {
  const {count} = useTools();
  // useEffect(()=>{
    
  //   console.log(count)
  // },[count])
  return (
    <AuthContext.Provider value={{count}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider};
