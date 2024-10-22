import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';
import Modal from '../Components/Modal';
import './Home.css';
import snowboardImage from '../Assets/snowboarding.jpg';
import skiImage from '../Assets/skiboarding.webp';
import snowmobileImage from '../Assets/moto-de-nieve.jpg';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('');
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleActivityChange = (e) => {
    setSelectedActivity(e.target.value);
  };

  const handleClick = (activityId) => {
    navigate(`/activity/${activityId}`);
  };

  return (
    <div className="home-container">
      <h1>Escuela de Deportes de Nieve</h1>
      <div className="cards-container">
        <Card title="Snowboard" image={snowboardImage} onClick={() => handleClick('snowboard')}>
          <h3>SnowBoard</h3>
        </Card>
        <Card title="Ski" image={skiImage} onClick={() => handleClick('ski')}>
          <h3>Ski</h3>
        </Card>
        <Card title="Moto de Nieve" image={snowmobileImage} onClick={() => handleClick('moto-de-nieve')}>
          <h3>Moto de Nieve</h3>
        </Card>
      </div>
      <button onClick={openModal} className="rent-button">Alquilar Equipamiento</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Alquilar Equipamiento</h2>
        <form>
          <label>
            <input type="radio" name="activity" value="snowboard" onChange={handleActivityChange} />
            Snowboard
          </label>
          <label>
            <input type="radio" name="activity" value="ski" onChange={handleActivityChange} />
            Ski
          </label>
          <label>
            <input type="radio" name="activity" value="moto" onChange={handleActivityChange} />
            Moto de nieve
          </label>
          <button onClick={closeModal}>Confirmar Alquiler</button>
        </form>
      </Modal>
    </div>
  );
};

export default HomePage;
