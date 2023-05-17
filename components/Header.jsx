import React from 'react';
import mainLogo from '../images/troll-face.png';

export default function Header() {
  return (
    <header className="header">
      <img src={mainLogo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project"></h4>
    </header>
  );
}
