import { useState } from 'react';
import axios from 'axios';
import { Navigation, Header, Main, Footer } from './components/index';

function App() {
  const [photo, setPhoto] = useState('');
  const apiData = 'PD9uom2P9LqgNcAy9WOzfsu3epvIqzKSdT8BeIwTXGA';
  const [result, setResult] = useState([]);
  const [ condition, setCondition ] = useState(true);

  const handleChange = event => {
    setPhoto(event.target.value);
  }

  const handleSubmit = () => {
    const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+apiData;

    axios.get(url)
    .then((response) => {
      setResult(response.data.results);
      setCondition(false);
      console.log(response)
    }).catch(err => {
      console.log('error', err)
    })
  }

  return (
    <div className='w-full overflow-hidden'>
      <Navigation />
      <Header  handleChange={handleChange} handleSubmit={handleSubmit} photo={photo}/>
      <Main result={result} condition={condition}/>
      <Footer />
    </div>
  );
}

export default App;
