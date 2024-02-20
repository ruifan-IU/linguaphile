'use client';

import { useState, useEffect } from 'react';

const themes = [
  'light',
  'dark',
  'coffee',
  'aqua',
  'forest',
  'halloween',
  'lofi',
  'synthwave',
  'black',
  'cyberpunk',
  'retro',
  'valentine',
  'wireframe',
  'dracula',
];

const ThemeSelector = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
