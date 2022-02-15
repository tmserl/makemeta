import { stringify } from 'querystring';
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
