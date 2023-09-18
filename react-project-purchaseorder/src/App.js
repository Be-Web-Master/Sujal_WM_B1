import { useState } from 'react';
import './App.css';
import ExpiryDateComponent from './expiryDateComponent';
import TableComponent from './tableComponent';

function App() {
  const [table, setTable ] = useState([]);
  console.log({table});
  return (
    <div className="App">
      <header className="App-header">
        <ExpiryDateComponent setTable={setTable} table={table}/>
        <TableComponent table={table}/>
      </header>
    </div>
  );
}

export default App;
