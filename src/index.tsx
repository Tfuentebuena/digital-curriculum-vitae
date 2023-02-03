import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import MainPage from './MainPage'
import reportWebVitals from './reportWebVitals'
import JsonData from './tobias_data.json'

const root = ReactDOM.createRoot(document.getElementById('MainPage') as HTMLElement)
root.render(
  <React.StrictMode>
    <MainPage data={JsonData} />
  </React.StrictMode>
)
reportWebVitals()
