import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

import "./app.css"

export default function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  )
}
