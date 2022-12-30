import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import data from './data.js';
import Card from './Card';

console.log(data);

function App() {
  let cards = data.map((card) => <Card key={card.id} card={card} />);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="flex rw card-container">{cards}</div>
    </div>
  );
}

export default App;
