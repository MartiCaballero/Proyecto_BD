import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../Components/Modal';
import './Activity.css';
import snowboardImage from '../Assets/snowboarding.jpg'; 
import skiImage from '../Assets/skiboarding.webp'; 
import motoImage from '../Assets/moto-de-nieve.jpg'; 

const ActivityPage = () => {
  const [isInstructorModalOpen, setIsInstructorModalOpen] = useState(false);
  const [isTurnoModalOpen, setIsTurnoModalOpen] = useState(false);
  const [isDescripcionModalOpen, setIsDescripcionModalOpen] = useState(false);
  const [isAlumnosModalOpen, setIsAlumnosModalOpen] = useState(false);

  const { activityId } = useParams(); // Obtén el activityId de la URL

  const activityDetails = {
    snowboard: { name: 'SnowBoard', description: 'Snowboard es un deporte de invierno...', image: snowboardImage },
    ski: { name: 'Ski', description: 'Ski es un deporte de invierno...', image: skiImage },
    'moto-de-nieve': { name: 'Moto de Nieve', description: 'Moto de Nieve es un deporte de invierno...', image: motoImage },
  };

  const openModal = (setModalState) => () => setModalState(true);
  const closeModal = (setModalState) => () => setModalState(false);

  const activity = activityDetails[activityId];

  if (!activity) {
    return <h2>Actividad no encontrada</h2>;
  }

  return (
    <div className="activity-container">
        <h1>{activity.name}</h1> 
        <p>{activity.description}</p>
        <img src={activity.image} alt={activity.name} className="activity-image" />

        <div className="buttons-container">
            <button onClick={openModal(setIsInstructorModalOpen)}>Editar Instructor</button>
            <button onClick={openModal(setIsTurnoModalOpen)}>Editar Turno</button>
            <button onClick={openModal(setIsDescripcionModalOpen)}>Editar Descripción</button>
            <button onClick={openModal(setIsAlumnosModalOpen)}>Editar Alumnos</button>
        </div>

        {/* Modal para Instructores */}
        <Modal isOpen={isInstructorModalOpen} onClose={closeModal(setIsInstructorModalOpen)} title="Editar Instructor">
            <textarea> Instructores: </textarea>
            <button onClick={closeModal(setIsInstructorModalOpen)} className="confirmar-button">Confirmar cambios</button>
        </Modal>

        {/* Modal para Turnos */}
        <Modal isOpen={isTurnoModalOpen} onClose={closeModal(setIsTurnoModalOpen)} title="Editar Turno">
            <form>
                <div className="radio-container">
                <div className="radio-item">
                    <input type="radio" value="9:00" name="turno" /> 
                    <label>9:00 - 11:00</label>
                </div>
                <div className="radio-item">
                    <input type="radio" value="12:00" name="turno" /> 
                    <label>12:00 - 14:00</label>
                </div>
                <div className="radio-item">
                    <input type="radio" value="16:00" name="turno" /> 
                    <label>16:00 - 18:00</label>
                </div>
                </div>
                <button onClick={closeModal(setIsTurnoModalOpen)}>Confirmar Turno</button>
            </form>
        </Modal>

        {/* Modal para Alumnos */}
        <Modal isOpen={isAlumnosModalOpen} onClose={closeModal(setIsAlumnosModalOpen)} title="Editar Alumnos">
        <textarea> Alumnos Inscriptos: </textarea>
        <button onClick={closeModal(setIsAlumnosModalOpen)} className="confirmar-button">Confirmar cambios</button>
        </Modal>

        {/* Modal para Descripcion */}
        <Modal isOpen={isDescripcionModalOpen} onClose={closeModal(setIsAlumnosModalOpen)} title="Editar Alumnos">
        <textarea> Descripción de la actividad: </textarea>
        <button onClick={closeModal(setIsDescripcionModalOpen)} className="confirmar-button">Confirmar cambios</button>
        </Modal>
        </div>
    );
    };

    export default ActivityPage;
