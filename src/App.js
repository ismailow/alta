import Header from './components/header';
import Intro from './components/intro';
import Hepler from './components/helper';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Intro />
        <Hepler />
      </div>
    </div>
  );
}

export default App;
