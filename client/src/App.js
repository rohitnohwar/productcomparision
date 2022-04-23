import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Components/Main/Main.js';
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar/Sidebar';
import AddUser from './Components/AddUser/AddUser';
import AddInvoice from './Components/AddInvoice/AddInvoice.js';
import AddIssue from './Components/AddIssue/AddIssue.js';
import AddProject from './Components/AddProject/AddProject.js';
import AddProduct from './Components/AddProduct/AddProduct.js';

function App() {
  return (
    <Router>
      <Header />
      <div style={{display:'flex', flexWrap:'wrap'}}>
          <Sidebar />
          <div style={{width:'85%'}}>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/add-user" exact element={<AddUser />} />
              <Route path="/add-invoice" exact element={<AddInvoice />} />
              <Route path="/add-issue" exact element={<AddIssue />} />
              <Route path="/add-project" exact element={<AddProject />} />
              <Route path="/add-product" exact element={<AddProduct />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
