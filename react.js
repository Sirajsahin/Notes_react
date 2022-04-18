
// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [data, setData] = useState(1);
//   const [item, setItem] = useState([]);
//   console.log(data)
// // console.log(item)
//   const increment = () => {
//     setData(data + 1)

//     setItem([...item, data,',']);
    
//   };

//   const clear = () => {
//     setItem([]);
//     setData(1)
//   };
//   return (
//     <div className="App">
//       <h1>{item.slice(0,-1)}</h1>
//       <button onClick={increment}>add value</button>
//       <button onClick={clear}> clear</button>

//       {/* {
//         item.map((e, i) => {
//           return (

//           )
//         })
//       } */}
//     </div>
//   );
// }

// import React from 'react';
// // import '../App.css';
// class Car extends Component {
//   return <h2 data-ns-test="project-name">I am a Car!</h2>;
// }

// function App() {
//   return (
//     <>
// 	    <p data-ns-test="project-description">Who lives in my Garage?</p>
// 	    <Car />
//     </>
//   );
// }
// export default App;


import React, { useState } from 'react'
// import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
  const [tex,setTex]=useState('hello world');
  const [val,setVal]=useState(10);
  const [pix,setPix]=useState(5)

  return (
    <div id="main">
      <div>
        {/* <label> */}
      <input id="contentInput" type="text" value={tex} onChange={(e)=>setTex(e.target.value)}/>
      <input id="fontSizeInput"  type="number" value={val} onChange={(e)=>setVal(e.target.value)} />
      <input id="paddingInput" type="number" value={pix} onChange={(e)=>setPix(e.target.value)}/>
        {/* add input elememnts inside here */}
      </div>
 
 {/* render Preview component here */}
 <Preview fontSize={val} content={tex} padding={pix}/>
 
    </div>
  )
}


export default App;
