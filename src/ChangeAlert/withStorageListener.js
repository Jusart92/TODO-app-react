import React from 'react';

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [staregeChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    });

    const toogleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={staregeChange} toggleShow={toogleShow} />;
  };
}

export { withStorageListener };
