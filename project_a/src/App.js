
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import  FindJob1 from './Components/FindJob1';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
function App() {
  return (
   <>
  <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/findjob" element={<FindJob1/>}/>
          <Route path="/login" element={<Login/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    {/* <BrowserRouter>
    <Routes>
    <Header/>
      <Switch>
      <Route index element={<Homepage/>}/>
      <Route path="/findjob" element={<FindJob1/>}/>
     </Switch>
     <Footer/>
    </Routes>
   
    </BrowserRouter> */}
  
   </>
  );
}

export default App;
