import React from 'react';
import { AuthorizationPage } from './pages/AuthorizationPage';
import { WelcomePage } from './pages/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <WelcomePage /> }/>
          <Route path='/auth' element={ <AuthorizationPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
