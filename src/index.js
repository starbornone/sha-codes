import React from 'react'
import { render } from 'react-dom'

import Layout from './layout/Layout'
import App from './App'

import '@fontsource/overpass-mono'
import '@fontsource/rubik'
import './index.css'

import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
render(
  <Layout>
    <App />
  </Layout>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
