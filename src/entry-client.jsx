import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Router2 } from './router2'

ReactDOM.hydrateRoot(
  document.querySelector('#root'),
  <BrowserRouter>
    <Router2 />
  </BrowserRouter>
)
