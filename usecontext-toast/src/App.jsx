import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import { ToastContextProvider } from './context/ToastContext'
import { MainLayout } from './layout/MainLayout'

import { SuccessPage } from './components/SuccessPage'
import { InfoPage } from './components/InfoPage'
import { WarningPage } from './components/WarningPage'
import { ErrorPage } from './components/ErrorPage'


function App() {
  return (
    <>
      <ToastContextProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<SuccessPage />} />
              <Route path='info' element={<InfoPage />} />
              <Route path='warning' element={<WarningPage />} />
              <Route path='error' element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </ToastContextProvider>

    </>
  )
}

export default App
