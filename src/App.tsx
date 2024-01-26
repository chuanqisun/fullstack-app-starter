import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState<string>("Connecting to backend...");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:9745/", { mode: 'cors' });
      const text = await res.text()
      setMessage(text);
    }

    const id = setInterval(fetchData, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Waiting for server connection&hellip;</p>
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
