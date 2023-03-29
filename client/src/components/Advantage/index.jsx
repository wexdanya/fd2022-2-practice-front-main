import React from 'react';
import CONSTANTS from '../../constants';
import styles from './Advantage.module.sass';
import advantages from './advantage.json';
const Advantage = () => {
  const renderAdvantes = (card) => (
    <article className={styles.card}>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}${card.imgPath}`}
        alt={`${card.imgPath}`}
      />
      <h3>{card.title}</h3>
      <p>{card.content}</p>
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
