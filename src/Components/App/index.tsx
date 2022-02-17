import './App.css';
import { useState } from 'react';
import Header from '../Header';
import Input from '../Input';
import Output from '../Output';

interface iData {
  title: string;
  description: string;
  image: string;
}

function App() {
  const [data, setData] = useState<iData>({
    title: '',
    description: '',
    image: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  return (
    <div className="App">
      <Header />
      <Input handleChange={handleChange} data={data} />
      <Output data={data} />
    </div>
  );
}

export default App;
