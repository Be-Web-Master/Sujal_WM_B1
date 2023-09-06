// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { InputForm } from './InputForm.js';
import { DataList, dataArray } from './DataList';



export default function ReactComp() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className='App'>
        <button id="btn" onClick={increaseCount}>Add</button>
        <span> count {count} </span>
        <button id="btn" onClick={() => setCount(count - 1)}>Subtract</button>
        <InputForm rcCount={count} rcCount2={count*2}>
          {
            count > 5 ?
             <Comp1  compCount={count * 3000}/> : 
             <Comp1  compCount={count * 1000}/>
          }
          {
            count > 5 && <div>Hello From Div</div>
          }
        </InputForm>
        {
          dataArray.map((elem,i)=>{
           return <DataList order={i+1} a={elem.a} b={elem.b} />
          })
        }
      </div>
    </>
  );
}

function Comp1(props) {
  const {compCount} = props;
  return <div>From Comp1 : {compCount}</div>
}

 
