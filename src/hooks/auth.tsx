import React,{ 
  createContext, 
  ReactNode, 
  useContext,
  useEffect,
  useState 
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}


interface AuthContextData {

}



export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children } : AuthProviderProps){
  
  return(
    <AuthContext.Provider value={{ 
      children
      }}>
      { children }
    </AuthContext.Provider>
  )
}



function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth};