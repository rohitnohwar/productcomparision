import React, { Suspense } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      <div>
          {/* <Sidebar /> */}
          <div>
          <Suspense fallback={<div style={{margin:'auto', textAlign:'center',fontSize:'30px', fontWeight:'800'}}>Loading...</div>}>
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
