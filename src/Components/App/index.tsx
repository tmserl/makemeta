import { useState } from 'react';
import './App.css';
import Header from '../Header';
import Input from '../Input';
import Output from '../Output';

function App() {
  const [data, setData] = useState({ title: 'test' });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  return (
    <div className="App">
      <Header />
      <Input handleChange={handleChange} text={data} />
      <Output data={data} />
    </div>
  );
}

export default App;
