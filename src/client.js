import React from 'react';
import { render } from 'react-dom';
import { stylesheet } from 'astroturf';

const App = () => <div className={styles.app}>Hello world!</div>;
const styles = stylesheet`
  .app {
    color: red;
  }
`;

render(<App />, document.getElementById('root'));
