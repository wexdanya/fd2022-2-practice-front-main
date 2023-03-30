import React from 'react';
import CONSTANTS from '../../constants';
import styles from './Advantage.module.sass';
import advantages from './advantage.json';
const { STATIC_IMAGES_PATH } = CONSTANTS;
const Advantage = () => {
  const renderAdvantes = ({ id, imgPath, title, content }) => (
    <article className={styles.card} key={id}>
      <img src={`${STATIC_IMAGES_PATH}${imgPath}`} alt={`${imgPath}`} />
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
  return (
    <section className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>
        {advantages.map(renderAdvantes)}
      </div>
    </section>
  );
};

export default Advantage;
