import './App.css'
import Body from './components/Body.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path='/login' element={<div>Login-Page</div>} />
          <Route path='/profile' element={<div>Profile-Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;