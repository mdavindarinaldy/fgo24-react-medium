import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import Layout from './components/Layout'

const router = createBrowserRouter ([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }, {
        path: '/article/:id/:username/:slug',
        element: <ArticlePage/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App