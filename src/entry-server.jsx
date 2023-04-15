import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Router } from './router'
import fetch from 'isomorphic-fetch';
export const render = async ({ path }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router data={data}/>
    </StaticRouter>
  )
}
