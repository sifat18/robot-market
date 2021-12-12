import * as React from 'react';
//import  bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
// import animation libraries
import AOS from 'aos';
import 'aos/dist/aos.css';

// react router 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//import components
import Home from './Components/HomePage/Home';
import Footer from './Components/Footer/Footer';
import Nopage from './Components/Nopage/Nopage';
import Success from './Components/SuccessPage/Success';
function App() {
  // initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      {/*Add your code here*/}
      {/* adding components */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
