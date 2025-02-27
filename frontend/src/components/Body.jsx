import React from 'react';

const Body = () => {
  return (
    <main style={styles.main}>
      <p>Welcome to my website! This is the main content area.</p>
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem',
    textAlign: 'center',
    marginTop: '8rem',
  },
};

export default Body;