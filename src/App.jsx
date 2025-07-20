import './App.css'
import Body from './components/Body.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<div>Profile-Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;