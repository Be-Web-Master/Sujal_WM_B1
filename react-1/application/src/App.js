import './App.css';
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([])
  const cardBoxId = document.getElementById("cardBoxId");
  const inputId = document.getElementById("inputId");
  const list = document.getElementById("list");


  function saveInputData(event) {
    event.preventDefault();
    const newData = [...data, inputVal]
    setData(newData);
    console.log({newData,data});
    inputId.value = "";
  }

 function toggleClass(event) {
  console.log(event.target.checked);
    if(!cardBoxId || ! list) return;
   const ischecked = event.target.checked;
   if(ischecked) {
     cardBoxId.style.display = "flex";
     list.style.display = "none";
  }
   else {
    cardBoxId.style.display = "none";
    list.style.display = "block";

  }
}

function deleteLiElement(event) {
  const newData = [...data];
  console.log(event.target.id);
  newData.splice(event.target.id, 1)
  setData(newData);
}

  return (
    <div className="app">
      <form onSubmit={saveInputData}>
        <input type='text' id='inputId' onChange={(event) => {
          setInputVal(event.target.value);
          }}/>
        <button>Submit</button>
      </form>
      <input type='checkbox' className='checkBox' onClick={toggleClass}/>
      <div id='cardBoxId' style={{display: "none"}}>
        {
          data.map((elem) => {
            return <>
              <div className='card'> {elem}</div>
              <span onClick={deleteLiElement}> X </span>
            </>
          })
        }
      </div>
      <ol id='list'>
        {
          data.map((elem, idx)=>{
            return (<>
              <li id={idx}> {elem} <span style={{ display: "inline" }} id={idx} onClick={deleteLiElement}> delete</span></li>
              
              </>
              )
          })
        }
      </ol>
    </div>
  );
}

export default App;
