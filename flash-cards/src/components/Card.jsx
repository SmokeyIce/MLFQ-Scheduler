import { useState } from 'react';

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleFlip}>
      <div className="card-content">
        {isFlipped ? card.answer : card.question}
      </div>
    </div>
  );
};

export default Card; 