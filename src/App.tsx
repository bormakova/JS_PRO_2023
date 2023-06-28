import React from 'react';
import styles from './App.module.css';
// import { PostsPage } from './Containers/PostsPage';
import { MainPage } from './Containers/MainPage';

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <PostsPage /> */}
      <MainPage />
    </div>
  );
}

export default App;
