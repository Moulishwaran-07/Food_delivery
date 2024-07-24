import { useState } from 'react'
import Home from './Front_end/Home'
import Header from './Front_end/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Header' element={<Header></Header>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
