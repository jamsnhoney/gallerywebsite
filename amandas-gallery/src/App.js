import './App.css';

import Top from './pages/Top';
import Hero from './pages/Hero';
import Bottom from './pages/Bottom';

function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <Top />
        <Hero />
        <Bottom />
      </header>
    </div>
  );
}

export default App;
