import React, {useState, useEffect} from 'react'
import axios from 'axios'
function App(){

  const [data, setData] = useState([{}])
  useEffect(()=>{
    fetch("http://localhost:5000/members").then(
      res => res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
      }
    )
  },[])
  return(
    <div>
      oi
    </div>
  )
}
export default App