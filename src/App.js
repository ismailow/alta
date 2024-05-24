import Header from './components/header';
import Intro from './components/intro';
import Hepler from './components/helper';
import Subscriptions from './components/subscriptions';
import Details from './components/details';

import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Intro />
        <Hepler />
        <Subscriptions />
        <Details />
      </div>
    </div>
  );
}

export default App;
