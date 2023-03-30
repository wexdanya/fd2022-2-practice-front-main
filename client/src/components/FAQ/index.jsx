import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import faq from './FAQ.json';
import cx from 'classnames';
const FAQ = () => {
  const [active, setActive] = useState([]);
  const renderFaq = (faq) => {
    const { title, articles, id } = faq;
    const handleClick = ({ target }) => {
      const id = Number(target.id);
      const isActive = active.includes(id);
      if (!isActive) {
        return setActive((prew) => [...prew, id]);
      }
      if (isActive) {
        return setActive((prew) => [...prew.filter((el) => el !== id)]);
      }
    };
    const classNames = cx(styles.faq, { [styles.active]: active.includes(id) });
    return (
      <article className={classNames} key={id} id={id} onClick={handleClick}>
        <h3 className={styles.faqTitle} id={id}>
          {title}
        </h3>
        {articles.map((article) => (
          <p className={styles.faqDescription} key={article.id} id={id}>
            {article.text}
          </p>
        ))}
      </article>
    );
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      {faq.map(renderFaq)}
    </section>
  );
};

export default FAQ;
