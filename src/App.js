import Header from './components/header';
import Intro from './components/intro';
import Hepler from './components/helper';
import './App.css';
import Subscriptions from './components/subscriptions';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Intro />
        <Hepler />
        <Subscriptions />
      </div>
    </div>
  );
}

export default App;
