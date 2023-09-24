import { useState, createRef, useEffect } from 'react';
import './App.css';
import TableComp from './table';
// import ExpiryDateComponent from './expiryDateComponent';
// import TableComponent from './tableComponent';
// import { SlabComponent } from './slab';


function App() {
  const [modal, setModal] = useState({ open: false, type: '' });
  const divApp = createRef();
  useEffect(() => {
    modal.open ? divApp.current.style.opacity = "0.5" : divApp.current.style.opacity = "1"
  })
  return (
    <div ref={divApp} className='App'>
      <header className="App-header">
        <TableComp setModal={setModal} modal={modal} />
      </header>
    </div>
  );
}

export default App;


// const [table, setTable ] = useState([]);
// {/* <ExpiryDateComponent setTable={setTable} table={table}/>
// <TableComponent table={table}/> */}
// {/* <SlabComponent/> */}

