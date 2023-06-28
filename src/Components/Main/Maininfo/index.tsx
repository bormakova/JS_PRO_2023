import React from 'react';
import aboutphoto from './aboutphoto.jpg';
import styles from './Maininfo.module.css';

export const Maininfo = () => {
  return (
    <div>
      <section className={styles.sectionAbout}>
        <div>
          <h1>О проекте</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur accusantium, voluptates voluptatum unde commodi aliquid rerum nesciunt id harum a porro incidunt, eius, quasi non eum hic in dolorem.</p>
        </div>
        <img src={aboutphoto} className="aboutPhoto" alt='about' />
      </section>
    </div>
  );
};
