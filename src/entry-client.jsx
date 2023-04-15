import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router2 } from './router2'
import fetch from 'isomorphic-fetch';
const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = await response.json();
ReactDOM.hydrateRoot(
  document.querySelector('#root'),
  <BrowserRouter>
    <Router2 data={data}/>
  </BrowserRouter>
)
