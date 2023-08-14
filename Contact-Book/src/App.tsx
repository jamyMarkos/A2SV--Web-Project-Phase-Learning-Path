import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import './App.css'

import Home from './pages/Home'
import AddContactForm from './pages/AddContactForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<AddContactForm />} />
      </Routes>
    </Router>
  )
}

export default App