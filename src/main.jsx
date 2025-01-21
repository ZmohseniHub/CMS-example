import { render } from 'preact'
import './index.css'
import App from './app.jsx'
import { BrowserRouter } from "react-router-dom"
import React from 'react'

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app')
)
