import './App.css';
import { useState } from 'react';
import Header from '../Header';
import Input from '../Input';
import Output from '../Output';
import Footer from '../Footer';

interface iData {
  title: string;
  description: string;
  image: string;
}

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

  const [counter, setCounter] = useState([0, 0, 0]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  function handleCounter(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    setCounter([
      ...counter.slice(0, index),
      e.target.value.length,
      ...counter.slice(index + 1),
    ]);
  }

  return (
    <div className="App">
      <Header />
      <Input
        handleChange={handleChange}
        handleCounter={handleCounter}
        data={data}
        counter={counter}
      />
      <Output data={data} />
      <Footer />
    </div>
  );
}

export default App;
