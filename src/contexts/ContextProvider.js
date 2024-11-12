import React, {createContext,useContext,useState} from 'react';

const StateContext=createContext();

const initialState={
  chat:false,
  cart:false,
  userProfile:false,
  notification:false,
}

export const ContextProvider=({children})=>{
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [user, setUser] = useState(null);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false)
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };
  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  const logout = () => {
    // Perform the logout logic here (e.g., remove JWT from local storage, clear cookies)
    localStorage.removeItem('authToken');
    setUser(null);
    // Redirect to login page
    window.location.href = '/login';
  };

  return(
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings,user, setUser, logout  }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);