// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome Home</h1>
      <button onClick={() => navigate('/calculator')} style={{ margin: '10px' }}>
        Calculator
      </button>
      <button onClick={() => navigate('/todolist')} style={{ margin: '10px' }}>
        ToDo List
      </button>
    </div>
  );
}

export default Home;
