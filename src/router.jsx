import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Other } from './pages/Other'
import { NotFound } from './pages/NotFound'

export const Router = ({data}) => {
  return (
    <Routes>
      <Route index element={<Home value={data}/>} />
      <Route path="/other" element={<Other />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
