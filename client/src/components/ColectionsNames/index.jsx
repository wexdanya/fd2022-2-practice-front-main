import React, { useState } from 'react';
import styles from './ColectionsNames.module.scss';
import cx from 'classnames';
const namesBtn = [
  { id: 1, name: 'top categories' },
  { id: 2, name: 'top industry' },
  { id: 3, name: 'top ideas' },
];

const ColectionsNames = () => {
  const [id, setId] = useState(1);
  const rednerButtons = (button) => {
    const classNames = cx(styles.button, { [styles.active]: id === button.id });
    return (
      <button
        key={button.id}
        className={classNames}
        onClick={() => setId(button.id)}
      >
        {button.name}
      </button>
    );
  };
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Largest Collection of Brandable Names</h3>
      <p className={styles.description}>
        Explore themed brand name collections created by our experienced team of
        branding experts
      </p>
      <div className={styles.buttonsWrapper}>{namesBtn.map(rednerButtons)}</div>
    </section>
  );
};

export default ColectionsNames;
