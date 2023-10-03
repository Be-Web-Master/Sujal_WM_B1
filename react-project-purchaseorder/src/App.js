import { useState, createRef, useEffect, useRef } from "react";
import "./App.css";
import { TableCompFromApi } from "./components/table/tableFromApi";

function App() {
  const [modal, setModal] = useState(false);
  // const modal
  const divApp = useRef();
  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo(window.scrollX, window.scrollY);
    // divApp.current.scroll = "disable";
    // divApp.current.scrollIntoView();
    // modal.open ? divApp.current.style.opacity = "0.7" : divApp.current.style.opacity = "1"
  },[modal]);
  return (
    <div ref={divApp} className={`App ${modal && "block-app"}`}>
      <TableCompFromApi openModal={modal} setOpenModal={setModal} />
    </div>
  );
}

export default App;
