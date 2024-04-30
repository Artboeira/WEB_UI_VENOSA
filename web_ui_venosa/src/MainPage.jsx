import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'; // Import custom CSS file

const MainPage = () => {
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [choice3, setChoice3] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Connect to WebSocket server
  const socket = io('http://localhost:3000');

  const handleConfirm = () => {
    // Send choices via WebSocket
    socket.emit('choices', { choice1, choice2, choice3 });

    // Show confirmation page
    setShowConfirmation(true);
  };

  const handleChoice1 = (value) => {
    setChoice1(value);
    setSelectedOption1(value);
  };

  const handleChoice2 = (value) => {
    setChoice2(value);
    setSelectedOption2(value);
  };

  const handleChoice3 = (value) => {
    setChoice3(value);
    setSelectedOption3(value);
  };

  if (showConfirmation) {
    return (
      <div>
        <h1>Thank you!</h1>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h1 className="title">Crie o seu plano de fundo</h1>
      <h2 className="subtitle">Palavras-chave</h2>
      <Carousel interval={null} controls={false} indicators={false}>
        <Carousel.Item>
          <Button
            className={selectedOption1 === 'Option 1' ? 'option-btn selected' : 'option-btn'}
            onClick={() => handleChoice1('Option 1')}
          >
            Option 1
          </Button>
          <Button
            className={selectedOption1 === 'Option 2' ? 'option-btn selected' : 'option-btn'}
            onClick={() => handleChoice1('Option 2')}
          >
            Option 2
          </Button>
        </Carousel.Item>
      </Carousel>

      <h2 className="subtitle">Tonalidade</h2>
      <Carousel interval={null} controls={false} indicators={false}>
        <Carousel.Item>
          <Button
            className={selectedOption2 === 'Option 1' ? 'option-btn selected' : 'option-btn'}
            onClick={() => handleChoice2('Option 1')}
          >
            Option 1
          </Button>
          <Button
            className={selectedOption2 === 'Option 2' ? 'option-btn selected' : 'option-btn'}
            onClick={() => handleChoice2('Option 2')}
          >
            Option 2
          </Button>
        </Carousel.Item>
      </Carousel>

      <h2 className="subtitle">Estilo de Arte</h2>
      <Carousel interval={null} controls={false} indicators={false}>
        <Carousel.Item>
          <Button
            className={selectedOption3 === 'Option 1' ? 'option-btn selected' : 'option-btn'}
            onClick={() => handleChoice3('Option 1')}
          >
            Option 1
          </Button>
          <Button
            className={selectedOption3 === 'Option 2' ? 'option-btn selected' : 'option-btn'}
            onClick={() => handleChoice3('Option 2')}
          >
            Option 2
          </Button>
        </Carousel.Item>
      </Carousel>

      <Button className="confirm-btn" onClick={handleConfirm}>
        Concluir
      </Button>
    </div>
  );
};

export default MainPage;
