import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import PhantomProvider from './components/LaunchedMainComponents/PhantomAdapter';
import { Main } from './components/Main';

function App() {
  return (
    <PhantomProvider>
      <div className="App">
        <Header /> 
        <Main /> 
        <Footer />
      </div>
    </PhantomProvider> 
  );
}

export default App;
