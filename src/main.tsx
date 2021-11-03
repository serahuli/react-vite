import React from 'react'
import ReactDOM from 'react-dom'
import Index from './container/Index'
import '@/locale/index'
import { Globalstyle } from '@styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
      <Globalstyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
