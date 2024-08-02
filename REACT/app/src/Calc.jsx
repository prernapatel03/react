// import React, { useState } from 'react'
// import './calc.css'

// export default function Calc() {

//   let [ answer , setAnswer ] = useState('')

//   console.log(answer)

//   function allData(event){
//     // let answer = document.getElementById('answer');
//       // if(event.target.value == '='){
//       //     if(answer.value == ''){
//       //        return answer.value = ""
//       //     }
//       //     answer.value = eval(answer.value)
//       // }
//       // else if(event.target.value == 'c'){
//       //     answer.value = ''
//       // }
//       // else if(event.target.value == 'x'){

//       //     answer.value = answer.value.slice(1,answer.value.length)
//       // }
//       // else{

//               setAnswer( [...answer  ,event.target.value])
//           //  console.log(x)
//       // }

//   }
//   return (
//     <div>
//          <input type="text" name="" id="answer" value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
//     <form onClick={allData}>
//         <input type="button" value="1" id=""/>
//         <input type="button" value="2" id=""/>
//         <input type="button" value="3" id=""/>
//         <input type="button" value="+" id=""/>
//         <input type="button" value="4" id=""/>
//         <input type="button" value="5" id=""/>
//         <input type="button" value="6" id=""/>
//         <input type="button" value="-" id=""/>
//         <input type="button" value="7" id=""/>
//         <input type="button" value="8" id=""/>
//         <input type="button" value="9" id=""/>
//         <input type="button" value="*" id=""/>

//         <input type="button" value="/" id=""/>
//         <input type="button" value="=" id=""/>
//         <input type="button" value="0" id=""/>
//         <input type="button" value="." id=""/>

//         <input type="button" value="c" id=""/>
//         <input type="button" value="x" id=""/>

//     </form>

//     </div>
//   )
// }

import React, { useState } from "react";
import "./calc.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const allInput = (event) => {
    if (event.target.value == "=") {
      if (input == "") {
        return setInput("");
      }

      setResult(eval(input));
    } 
    else if (event.target.value == "C") {
      setInput("");
      setResult("");
    } 
    else if (event.target.value == "->") {
      let inputVal = input.slice(0, input.length - 1);
      setInput(inputVal);
    } else {
      setInput(input + event.target.value);
      // console.log(event.target.value)
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <input
          type="text"
          className="show_input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="show_result">{result}</p>
      </div>

      <div className="buttons" onClick={allInput}>
        <input type="button" value="C" className="btn highlight" />
        <input type="button" value="/" className="btn highlight" />
        <input type="button" value="*" className="btn highlight" />

        <button type="button" value="->" className="btn highlight">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.141 1.2L1.67588 6L6.141 10.8H18.75V1.2H6.141ZM5.5814 12L0 6L5.5814 0H20V12H5.5814Z"
              fill="#6B8AFA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.17574 3.17574C9.41005 2.94142 9.78995 2.94142 10.0243 3.17574L14.8243 7.97574C15.0586 8.21005 15.0586 8.58995 14.8243 8.82426C14.5899 9.05858 14.2101 9.05858 13.9757 8.82426L9.17574 4.02426C8.94142 3.78995 8.94142 3.41005 9.17574 3.17574Z"
              fill="#6B8AFA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8243 3.17574C14.5899 2.94142 14.2101 2.94142 13.9757 3.17574L9.17574 7.97574C8.94142 8.21005 8.94142 8.58995 9.17574 8.82426C9.41005 9.05858 9.78995 9.05858 10.0243 8.82426L14.8243 4.02426C15.0586 3.78995 15.0586 3.41005 14.8243 3.17574Z"
              fill="#6B8AFA"
            />
          </svg>
        </button>

        <input type="button" value="7" className="btn" />
        <input type="button" value="8" className="btn" />
        <input type="button" value="9" className="btn" />
        <input type="button" value="-" className="btn highlight" />

        <input type="button" value="4" className="btn" />
        <input type="button" value="5" className="btn" />
        <input type="button" value="6" className="btn" />
        <input type="button" value="+" className="btn highlight" />

        <input type="button" value="1" className="btn" />
        <input type="button" value="2" className="btn" />
        <input type="button" value="3" className="btn" />
        <input type="button" value="=" className="btn equal" />

        <input type="button" value="%" className="btn" />
        <input type="button" value="0" className="btn" />
        <input type="button" value="." className="btn" />
      </div>
    </div>
  );
};

export default Calculator;
