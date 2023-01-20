import React, { Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const Main = React.lazy(() => import('./Components/Main/Main.js'));
const Header = React.lazy(() => import('./Components/Header/Header.js'));
const AddProduct = React.lazy(() => import('./Components/AddProduct/AddProduct.js'));

function App() {
  return (
    <Router>
      <Header />
      <div>
          <div>
          <Suspense fallback={<div style={{margin:'auto', textAlign:'center',fontSize:'30px', fontWeight:'800'}}>Loading...</div>}>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/add-product" exact element={<AddProduct />} />
            </Routes>
            </Suspense>
          </div>
      </div>
    </Router>
  );
}

export default App;
