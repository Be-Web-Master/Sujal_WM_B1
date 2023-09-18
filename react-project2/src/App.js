import './App.css';
import { useEffect, useRef, useState } from 'react';
export default function App() {

  const [state, setState] = useState([]);
  const [nutrient, setNutrient] = useState({});
  const [search, setSearch] = useState("");

  async function getApi() {
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4fe512725fmshd03f79cd985b381p1ded5ejsn061774892cae',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setState(result.hints);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getApi();
  }, [])
  return (
    <div className="App">
      <div>
        <select onClick={(e) => {
          // setNutrient(e.target.value);
        }}>
          <option>Nutrient</option>
          <option value="Energy">Energy</option>
          <option value="Fat">Fat</option>
        </select>
        <input onChange={(e) => {
          setSearch(e.target.value)
        }} />
      </div>
      <header className="App-header">
        {
          state.length > 0 && state.map((elem, idx) => {
            const obj = elem.food;
            if (obj.label.toLowerCase().includes(search)) {
              return (<CardComponent obj={obj} idx={idx} />)
            }
            else return null;
          })
        }
      </header>
    </div>
  );
}

function CardComponent({ obj, idx }) {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState([]);
  const [plainText, setPlainText] = useState("");
  const [extraText, setExtraText] = useState("");
  // const divRef = useRef('')
  // const extraTextRef = useRef('')
  // const plainTextRef = useRef('')
  console.log({ plainText, extraText });
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      console.log(inputElement.current);
      inputElement.current.focus();
    }
  }, []);
  return (
    <div id={idx} className='container'>
      <img src={obj.image} className="App-logo" alt="img" />
      <label>{obj.label}</label>
      <label>Energy / Calories : {obj.nutrients.ENERC_KCAL}</label>
      <label>Fat : {obj.nutrients.FAT}</label>
      <form id={idx} onSubmit={(e) => {
        e.preventDefault();
        const elem = e.target.children;
        elem[1].setAttribute("disabled", "true");
        if (!elem[0].value) {
          return alert("Comment is Empty!!!")
        }
        setComment([...comment, elem[0].value]);
        elem[0].value = "";
        setCount(0)
      }}>
        <div className='textarea' id={idx}>
          <span className='plain-text' autoFocus contentEditable onKeyUp={(e) => {
            console.log(e.target.innerText.length);
            setPlainText(e.target.innerText);
            // if (e.target.innerText.length <= 20) setPlainText(e.target.innerText);
            // else setExtraText(plainText.substring(20));
          }}></span>
          {
            plainText.length > 20 && <span ref={inputElement} contentEditable className='extra-text'>{plainText.substring(20)} </span>
          }
          {/* <span ref={plainTextRef}
            contentEditable={plainTextRef?.current?.innerText?.length < 20} id='plain-text'
            onKeyUp={(e) => {
              setCount(e.target.innerText.length);
              // if (plainTextRef.current.innerText.length === 19) {
              //   console.log('called', e.target.innerText.length);
              //   extraTextRef.current.focus()
              // }
              plainTextRef.current.innerText = e.target.innerText.substring(0, 21)
            }}
          >
          </span>
          <span ref={extraTextRef} contentEditable={count > 19} id='extra-text'></span> */}
        </div>
        <button id={`btn${idx}`} disabled>Save</button>
      </form>
      <div className='comments'>
        {
          comment.length > 0 && comment.map((elem) => {
            return (
              <span className='comment'>{elem}</span>
            )
          })
        }
      </div>
      <span className='counter' >{20 - count}</span>
    </div>
  )
}