import { AuthorizationPage } from 'src/pages/AuthorizationPage';
import { WelcomePage } from 'src/pages/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Forms.style.scss';
import { HomePage } from 'src/pages/home';
import { RequireAuth } from 'src/features/require-auth';
import { Header } from 'src/widgets/header';

function App() {
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
}

export default App;
