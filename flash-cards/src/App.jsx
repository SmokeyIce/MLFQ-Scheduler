import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { cardData } from './data/cardData'

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [seenCards, setSeenCards] = useState([]);

  const getRandomCard = () => {
    if (seenCards.length === cardData.length - 1) {
      setSeenCards([]);
    }

    const unseenIndexes = cardData
      .map((_, index) => index)
      .filter(index => !seenCards.includes(index));

    const randomIndex = unseenIndexes[Math.floor(Math.random() * unseenIndexes.length)];
    
    setCurrentCardIndex(randomIndex);
    setSeenCards([...seenCards, randomIndex]);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Flashcards</h1>
        <h3>COP4808: FullStack<br />Irina Vorobieva<br />Z23678087</h3>
    
        <p>Total Cards: {cardData.length}</p>
      </div>
      
      <Card card={cardData[currentCardIndex]} />
      
      <button onClick={getRandomCard}>Next Card</button>
    </div>
  )
}

export default App
