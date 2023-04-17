import { createContext } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const value = {};

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
