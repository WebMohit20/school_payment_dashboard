import { useState, useContext, useEffect } from 'react'
import './App.css'
import TransactionsOverview from './pages/TransactionsOverview'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeContext'
import Signup from './pages/Signup'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import TransactionsBySchool from './pages/TransactionsBySchool'
import CheckStatusModal from './pages/CheckStatusModal'
import { LogIn } from 'lucide-react'



function App() {
  const { theme, user } = useContext(ThemeContext)
  // console.log(theme[0])
  
  return (
    <div data-theme={theme[0]}>
      <div className="min-h-screen  flex flex-row items-center justify-center bg-base-200 relative ">
        <Navbar />

        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
          
          { <Route path='/transactions' element={user[0] ? <TransactionsOverview />:<Navigate to="/login" /> } />}
          { <Route path='/transactions/school/:schoolId' element={ user[0] ?<TransactionsBySchool />:<Navigate to="/login" />} />}
          { <Route path='/check-status' element={user[0] ? <CheckStatusModal />:<Navigate to="/login" />}  />}
        </Routes>
        <Toaster />
        {/* <button className="btn btn-primary mt-4">Primary Button</button> */}

        {/* <div className="loading loading-spinner loading-lg mt-4">loader</div> */}
      </div>
    </div>
  )
}

export default App
