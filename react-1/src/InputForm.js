// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function InputForm(props) {
    const { rcCount, children } = props

    // let { rcCount } = props
    // rcCount = 1000;
    // console.log({children});
    const [inputValue, setInputValue] = useState("");
    return (
        <form>
            <div>Count In Form: {rcCount}</div>
            {children}
            {/* {rcCount2} */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}

            /><br />
            <a href='https:/www.google.com' target='_blank' rel='noreferrer'>{inputValue}</a><br/>
            <input type="submit" />
        </form>
    )
}

export {InputForm};