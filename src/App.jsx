import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import {Container} from './styles/styleGlobal'
import {Register} from './modules/Register'
import {Login} from './modules/Login'
import {Main} from './modules/Main'



function App() {

  return (
    <>
      <Container/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/content" element={<Main/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
