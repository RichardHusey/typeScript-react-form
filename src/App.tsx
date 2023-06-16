import React from 'react'
import Form from './Form';
import { FormData } from './Form';

function App() {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  }

  return (
    <div>
      <Form onValueSubmit={handleSubmit} />
    </div>
  );
}

export default App;