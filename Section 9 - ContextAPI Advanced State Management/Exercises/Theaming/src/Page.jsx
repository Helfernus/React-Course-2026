import React from 'react';
import Header from './Header';
import { ThemeContext } from './ThemeContextProvider';

export default function Page() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div id="app" className={theme} >
      <Header onThemeChange={toggleTheme} />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
