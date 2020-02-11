import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function FullName() {
  const firstName = 'Kevenn';
  const lastName = 'Caterinque';

  const styles = {
    color: '#FFAC00',
    backgroundColor: '#e2e2e2'
  }

  return (
    <h1 style={styles}>Hello {firstName + ' ' + lastName}</h1>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

