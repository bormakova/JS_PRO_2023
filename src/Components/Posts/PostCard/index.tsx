import React from 'react';
import styles from './PostCard.module.css'

export const PostCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <span className={styles.label}>Post Label</span>
      <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ex officiis.
        Dolores soluta, ullam consequuntur voluptatem ducimus rem molestias nulla quo, explicabo
        maxime incidunt magni fugiat officia quis et corrupti.</p>
    </div>
  );
};
