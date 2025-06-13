import React from 'react'
import ThemeContext from '../context/ThemeContext'; // Adjust the path as needed
import { useContext } from 'react';

export default function ContentComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
