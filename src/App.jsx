import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Sidenav from './Sidenav';
import Landingpage from './components/Landingpage';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="fullbody">
        <div className="row">
          <div className="col-1">
            <Sidenav />
          </div>
          <div className="col-11 col2">
            <Header />
            <Routes>
            <Route path='/' element={<Landingpage/>} />

            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
