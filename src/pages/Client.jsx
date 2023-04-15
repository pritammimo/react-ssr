import { useState } from "react";
import { Link } from "react-router-dom"

export const ClientCompopnent = () => {
  const [hello, sethello] = useState(1);
  return (
  <div>
        <Link to="/">Home Component</Link>
        <h1>{hello}</h1>
        <button onClick={()=>sethello(hello*2)}>Client value</button>
    ClientComponent</div>
  
  )
}
