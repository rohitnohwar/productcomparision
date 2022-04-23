import React, { Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Main from './Components/Main/Main.js';
// import Header from './Components/Header/Header.js';
// import Sidebar from './Components/Sidebar/Sidebar';
// import AddUser from './Components/AddUser/AddUser';
// import AddInvoice from './Components/AddInvoice/AddInvoice.js';
// import AddIssue from './Components/AddIssue/AddIssue.js';
// import AddProject from './Components/AddProject/AddProject.js';
// import AddProduct from './Components/AddProduct/AddProduct.js';

const Main = React.lazy(() => import('./Components/Main/Main.js'));
const Header = React.lazy(() => import('./Components/Header/Header.js'));
const Sidebar = React.lazy(() => import('./Components/Sidebar/Sidebar'));
const AddUser = React.lazy(() => import('./Components/AddUser/AddUser'));
const AddInvoice = React.lazy(() => import('./Components/AddInvoice/AddInvoice.js'));
const AddIssue = React.lazy(() => import('./Components/AddIssue/AddIssue.js'));
const AddProject = React.lazy(() => import('./Components/AddProject/AddProject.js'));
const AddProduct = React.lazy(() => import('./Components/AddProduct/AddProduct.js'));

function App() {
  return (
    <Router>
      <Header />
      <div style={{display:'flex', flexWrap:'wrap'}}>
          <Sidebar />
          <div style={{width:'85%'}}>
          <Suspense fallback={<div style={{margin:'auto', fontSize:'30px', fontWeight:'800'}}>Loading...</div>}>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/add-user" exact element={<AddUser />} />
              <Route path="/add-invoice" exact element={<AddInvoice />} />
              <Route path="/add-issue" exact element={<AddIssue />} />
              <Route path="/add-project" exact element={<AddProject />} />
              <Route path="/add-product" exact element={<AddProduct />} />
            </Routes>
            </Suspense>
          </div>
      </div>
    </Router>
  );
}

export default App;
