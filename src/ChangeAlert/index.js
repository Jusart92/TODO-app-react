import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';
import '../TodoForm/TodoForm.css';
function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que cambiaste tus TODOS en otra ventana</p>
          <p>¿Quiere sincronizar sus Todos?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
            // onClick={console.log(' onClick click ')}
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

export { ChangeAlert };
