import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';
import '../TodoForm/TodoForm.css';
function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que cambiaste tus TODOS en otra ventana</p>
          <p>¿Quiere sincronizar sus Todos?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
          >
            Volver a cargar la informacion
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
