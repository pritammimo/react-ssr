import React,{useState} from 'react'

export const Home = () => {
  const [count, setcount] = useState(0);
  return (
    <>
    <div>Home</div>
    <div>{count}</div>
    <button onClick={()=>setcount(count+1)}>Increase</button>
    </>
  )
}


