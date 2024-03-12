import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [reqfoodname,setfoodname]= useState(' ');
  const [reqdays,setDays] = useState(0);
  const [foodList,setfoodList]=  useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/read")
    .then((res)=>{
      setfoodList(res.data);
    })
  },[])

  const addToList = () => {
    console.log(reqdays,reqfoodname);
    Axios.post("http://localhost:3001/insert", {
       foodname: reqfoodname,
       days: reqdays
      });
  };
  return (
    <div className="App">
      <h1>CRUD app with mern</h1>

      <label>Food name</label>
      <input type="text" onChange={(event)=>  {
        setfoodname(event.target.value);
      }}/>
      <label>Date since you ate it</label>
      <input type="number" onChange={(event)=>  {
        setDays(event.target.value);
      }}/>
      <button onClick={addToList}>Add to list</button>
      <h2> food List</h2>
      {foodList.map((val,key)=>{
        return <div><h2>{val.foodName}</h2> <h2> {val.lastAteDate}</h2></div>
      })}
    </div>
  );
}

export default App;
