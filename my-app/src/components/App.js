import '../styles/App.scss';
import React from 'react';
import { CustomRouter} from './CustomRouter';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <CustomRouter />
        <Footer/>
      </div>
  );
}

export default App;
