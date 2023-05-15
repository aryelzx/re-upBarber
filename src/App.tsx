import Body from "./pages/body/Body"
import Navbar from "./pages/navbar/Navbar"
import Servicos from "./routes/Servicos"
import Contato from "./routes/Contato"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Errorpage from "./pages/errorpage/ErrorPage"
function App(): JSX.Element {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/home" element={<Body />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
