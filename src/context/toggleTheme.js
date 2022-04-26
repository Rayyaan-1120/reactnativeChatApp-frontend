import React,{useState,useContext,createContext} from 'react';

export const DarkThemeToggle = createContext()

export const ToggleContext = ({children}) => {
   
    const [toggle,settoggle] = useState(false);

  return (
      <DarkThemeToggle.Provider value={{toggle,settoggle}}>
          {children}
      </DarkThemeToggle.Provider>
  )


}

