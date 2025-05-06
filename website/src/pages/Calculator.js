// App.jsx
import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly style={styles.display} />
      <div style={styles.buttonGrid}>
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)} style={styles.button}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '250px',
    margin: '50px auto',
    textAlign: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  display: {
    width: '100%',
    fontSize: '1.5rem',
    marginBottom: '10px',
    padding: '10px'
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px'
  },
  button: {
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};
