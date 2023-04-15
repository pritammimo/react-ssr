import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
export const Home = (props) => {
  const [count, setcount] = useState(0);
  return (
    <>
    <div>Home</div>
    <div>{count}</div>
    <ul>
      {props.value.slice(0,10).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
    <Link to="/client">Client</Link>
    <button onClick={()=>setcount(count+1)}>Increase</button>
    </>
  )
}


