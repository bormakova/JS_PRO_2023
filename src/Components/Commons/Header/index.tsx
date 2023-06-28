import React from 'react';
import styles from './Header.module.css';
import logo from '../Header/logo.favicon.svg';

export const Header = () => {
  return <header className={styles.header}>
    <div className={styles.meinMenu}>
      <img src={logo} className="logoHeader" alt='logo' />
      <div className={styles.rightMenu}>
        <ul className={styles.navmenu}>
          {/* сделать link и настроить nav через react-router-dom */}
          <li>О нас</li>
          <li>Наша продукция</li>
          <li>Обратная связь</li>
          <li>Контакты</li>
        </ul>
        <div className={styles.navicon}>
          <p>search</p>
          <p>favour</p>
          <p>profile</p>
          <p>card</p>
        </div>
      </div>
    </div>
  </header>;
};
