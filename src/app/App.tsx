import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'src/features/require-auth';
import { AuthorizationPage } from 'src/pages/AuthorizationPage';
import { WelcomePage } from 'src/pages/WelcomePage';
import { HomePage } from 'src/pages/home';
import { Header } from 'src/widgets';
import './App.style.scss';

const App = () => {
  return (
    <div className="App" style={{ width: '100%', height: '100%'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <WelcomePage /> }/>
          <Route path='/auth' element={ <AuthorizationPage /> } />
          <Route 
            path='/home' 
            element={
              <RequireAuth>
                <HomePage>
                  <Header />
                </HomePage>
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
