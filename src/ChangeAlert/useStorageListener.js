import React from 'react';

function useStorageListener(sincronize) {
  const [staregeChange, setStorageChange] = React.useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'TODOS_V1') {
      console.log('Hubo cambios en TODOS_V1');
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: staregeChange,
    toggleShow,
  };
}

export { useStorageListener };
