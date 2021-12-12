import * as React from 'react';
//import  bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
//import components
import Home from './Components/HomePage/Home';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/*Add your code here*/}
      {/* adding components */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
