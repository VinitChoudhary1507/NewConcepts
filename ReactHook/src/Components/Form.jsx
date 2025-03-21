import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Form() {
  const theme = useContext(ThemeContext);

  const themeStyles = {
    dark: {
      backgroundColor: '#333',
      color: 'white',
    },
    light: {
      backgroundColor: '#fff',
      color: 'black',
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}
