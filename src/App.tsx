import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes';
import MenuPrincipale from './components/MenuPrincipale';

function App() {
  return (
    <div className="App">
      <MenuPrincipale />
      <Routes>
        {
          ROUTES?.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
